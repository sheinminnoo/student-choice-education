"use server";

import { google } from "googleapis";
import { z } from "zod";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
import type { sheets_v4 } from "googleapis";

export type FormState = {
  success: boolean;
  message: string;
};

function getUKDateTime() {
  return new Date().toLocaleString("en-GB", { timeZone: "Europe/London" });
}

async function getSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
}

async function ensureTabExists(
  sheets: sheets_v4.Sheets,
  spreadsheetId: string,
  tabName: string,
  headers: string[],
) {
  let sheetId: number | undefined;

  try {
    const meta = await sheets.spreadsheets.get({ spreadsheetId });
    const sheet = meta.data.sheets?.find(
      (s: sheets_v4.Schema$Sheet) => s.properties?.title === tabName,
    );

    if (sheet) {
      sheetId = sheet.properties?.sheetId ?? undefined;
    } else {
      const newSheet = await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: tabName,
                  gridProperties: { frozenRowCount: 1 },
                },
              },
            },
          ],
        },
      });

      const maybeSheetId =
        newSheet.data.replies?.[0].addSheet?.properties?.sheetId;
      sheetId = maybeSheetId === null ? undefined : maybeSheetId;

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${tabName}!A1`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [headers] },
      });
    }

    if (sheetId !== undefined) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            {
              repeatCell: {
                range: { sheetId, startRowIndex: 0, endRowIndex: 1 },
                cell: {
                  userEnteredFormat: {
                    backgroundColor: { red: 0.1, green: 0.2, blue: 0.4 },
                    textFormat: {
                      foregroundColor: { red: 1, green: 1, blue: 1 },
                      bold: true,
                    },
                    wrapStrategy: "WRAP",
                    verticalAlignment: "MIDDLE",
                  },
                },
                fields:
                  "userEnteredFormat(backgroundColor,textFormat,wrapStrategy,verticalAlignment)",
              },
            },
            {
              repeatCell: {
                range: { sheetId, startRowIndex: 1 },
                cell: {
                  userEnteredFormat: {
                    wrapStrategy: "WRAP",
                    verticalAlignment: "TOP",
                  },
                },
                fields: "userEnteredFormat(wrapStrategy,verticalAlignment)",
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId,
                  dimension: "COLUMNS",
                  startIndex: 0,
                  endIndex: headers.length - 1,
                },
                properties: { pixelSize: 150 },
                fields: "pixelSize",
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId,
                  dimension: "COLUMNS",
                  startIndex: headers.length - 1,
                  endIndex: headers.length,
                },
                properties: { pixelSize: 450 },
                fields: "pixelSize",
              },
            },
          ],
        },
      });
    }
  } catch (error) {
    console.error("Sheet Format Error:", error);
  }
}

const contactFormSchema = z.object({
  firstName: z.string().min(1).trim(),
  lastName: z.string().min(1).trim(),
  email: z.string().email().toLowerCase().trim(),
  phone: z.string().min(5),
  interest: z.string().min(1),
  startYear: z.string().min(1),
  studyLevel: z.string().min(1),
  destination: z.string().min(1),
  message: z.string().min(1).max(2000),
  terms: z.string().refine((val) => val === "on"),
  honeyPot: z.string().max(0),
});

const eligibilitySchema = z.object({
  educationLevel: z.string().min(1),
  grades: z.string().min(1),
  englishLevel: z.string().min(1),
  destination: z.string().min(1),
  subject: z.string().min(1),
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(5),
});

type ContactData = z.infer<typeof contactFormSchema>;
type EligibilityData = z.infer<typeof eligibilitySchema>;

function createTransporter() {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) return null;

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, ""),
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  });
}

async function sendMailWithTimeout(
  transporter: nodemailer.Transporter,
  mailOptions: nodemailer.SendMailOptions,
  ms: number,
) {
  await Promise.race([
    transporter.sendMail(mailOptions),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Email timeout")), ms),
    ),
  ]);
}

async function sendEmails(
  data: ContactData | EligibilityData,
  type: "contact" | "eligibility",
) {
  const transporter = createTransporter();
  if (!transporter) return;

  try {
    if (type === "contact") {
      const adminHtml = (await ejs.renderFile(
        path.join(
          process.cwd(),
          "email-templates",
          "contact-admin-notification.ejs",
        ),
        data,
      )) as string;

      await sendMailWithTimeout(
        transporter,
        {
          from: `"Website Bot" <${process.env.GMAIL_USER}>`,
          to: process.env.GMAIL_USER,
          replyTo: (data as ContactData).email,
          subject: `🔔 New Enquiry: ${(data as ContactData).firstName} (${(data as ContactData).interest})`,
          html: adminHtml,
        },
        20000,
      );

      const studentHtml = (await ejs.renderFile(
        path.join(process.cwd(), "email-templates", "contact-confirmation.ejs"),
        {
          firstName: (data as ContactData).firstName,
          interest: (data as ContactData).interest,
          year: new Date().getFullYear(),
        },
      )) as string;

      await sendMailWithTimeout(
        transporter,
        {
          from: `"Student Choice Education" <${process.env.GMAIL_USER}>`,
          to: (data as ContactData).email,
          subject: `We received your enquiry, ${(data as ContactData).firstName}!`,
          html: studentHtml,
        },
        20000,
      );
    }

    if (type === "eligibility") {
      const adminHtml = (await ejs.renderFile(
        path.join(process.cwd(), "email-templates", "eligibility-admin.ejs"),
        data,
      )) as string;

      await sendMailWithTimeout(
        transporter,
        {
          from: `"Website Bot" <${process.env.GMAIL_USER}>`,
          to: process.env.GMAIL_USER,
          replyTo: (data as EligibilityData).email,
          subject: `🎯 New Eligibility Lead: ${(data as EligibilityData).fullName}`,
          html: adminHtml,
        },
        20000,
      );

      const studentHtml = (await ejs.renderFile(
        path.join(process.cwd(), "email-templates", "eligibility-student.ejs"),
        {
          firstName: (data as EligibilityData).fullName.split(" ")[0],
          destination: (data as EligibilityData).destination,
          year: new Date().getFullYear(),
        },
      )) as string;

      await sendMailWithTimeout(
        transporter,
        {
          from: `"Student Choice Education" <${process.env.GMAIL_USER}>`,
          to: (data as EligibilityData).email,
          subject: `We've received your assessment`,
          html: studentHtml,
        },
        20000,
      );
    }
  } catch (error) {
    console.error("Email Error:", error);
  }
}

export async function submitToGoogleSheet(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const rawData = {
      firstName: (formData.get("first_name") as string) || "",
      lastName: (formData.get("last_name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      interest: (formData.get("interest_category") as string) || "",
      startYear: (formData.get("start_year") as string) || "",
      studyLevel: (formData.get("study_level") as string) || "",
      destination: (formData.get("destination") as string) || "",
      message: (formData.get("message") as string) || "",
      terms: (formData.get("terms") as string) || "",
      honeyPot: (formData.get("job_role_hidden") as string) || "",
    };

    const validatedData = contactFormSchema.parse(rawData);

    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      return { success: false, message: "Missing GOOGLE_SHEET_ID." };
    }

    const tabName = "Contact_Leads";

    await ensureTabExists(sheets, spreadsheetId, tabName, [
      "Time (UK)",
      "Interest",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Start Year",
      "Level",
      "Destination",
      "Message",
    ]);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A:J`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            getUKDateTime(),
            validatedData.interest,
            validatedData.firstName,
            validatedData.lastName,
            validatedData.email,
            validatedData.phone,
            validatedData.startYear,
            validatedData.studyLevel,
            validatedData.destination,
            validatedData.message,
          ],
        ],
      },
    });

    void sendEmails(validatedData, "contact");

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.issues[0].message };
    }
    console.error(error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

export async function submitEligibility(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const rawData = {
      educationLevel: (formData.get("educationLevel") as string) || "",
      grades: (formData.get("grades") as string) || "",
      englishLevel: (formData.get("englishLevel") as string) || "",
      destination: (formData.get("destination") as string) || "",
      subject: (formData.get("subject") as string) || "",
      fullName: (formData.get("fullName") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
    };

    const validated = eligibilitySchema.parse(rawData);

    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    if (!spreadsheetId) {
      return { success: false, message: "Missing GOOGLE_SHEET_ID." };
    }

    const tabName = "Eligibility_Checks";

    await ensureTabExists(sheets, spreadsheetId, tabName, [
      "Time (UK)",
      "Full Name",
      "Email",
      "Phone",
      "Education Level",
      "Grades",
      "English",
      "Subject",
      "Destination",
    ]);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A:I`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            getUKDateTime(),
            validated.fullName,
            validated.email,
            validated.phone,
            validated.educationLevel,
            validated.grades,
            validated.englishLevel,
            validated.subject,
            validated.destination,
          ],
        ],
      },
    });

    void sendEmails(validated, "eligibility");

    return { success: true, message: "Check complete!" };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.issues[0].message };
    }
    console.error(error);
    return { success: false, message: "Submission failed." };
  }
}
