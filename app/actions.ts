"use server";

import { google } from "googleapis";
import { z } from "zod";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

// --- 1. SHARED TYPES ---
export type FormState = {
  success: boolean;
  message: string;
};

// ==========================================
//  PART A: CONTACT FORM LOGIC
// ==========================================

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  phone: z.string().regex(/^\+\d{7,15}$/, "Phone must include country code"),
  interest: z.string().min(1, "Please select a help topic"),
  startYear: z.string().min(1, "Please select a start year"),
  studyLevel: z.string().min(1, "Please select a study level"),
  destination: z.string().min(1, "Please select a destination"),
  message: z
    .string()
    .min(10, "Message too short")
    .max(2000, "Message too long")
    .trim(),
  terms: z.string().refine((val) => val === "on", {
    message: "You must agree to the terms.",
  }),
  honeyPot: z.string().max(0),
});

export async function submitToGoogleSheet(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    // 1. Sanitize Data
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

    // 2. Validate
    const validatedData = contactFormSchema.parse(rawData);

    // 3. Auth
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(
          /\\n/g,
          "\n",
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // 4. Setup Sheet Headers (If not exists)
    try {
      const checkHeader = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "Sheet1!A1",
      });
      if (!checkHeader.data.values || checkHeader.data.values.length === 0) {
        // Create Headers
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: "Sheet1!A1:J1",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                "Date",
                "Interest",
                "First Name",
                "Last Name",
                "Email",
                "Phone",
                "Start Year",
                "Level",
                "Destination",
                "Message",
              ],
            ],
          },
        });
        // Apply Styling (Blue Header)
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [
              {
                updateSheetProperties: {
                  properties: { gridProperties: { frozenRowCount: 1 } },
                  fields: "gridProperties.frozenRowCount",
                },
              },
              {
                repeatCell: {
                  range: { sheetId: 0, startRowIndex: 0, endRowIndex: 1 },
                  cell: {
                    userEnteredFormat: {
                      backgroundColor: { red: 0.1, green: 0.2, blue: 0.4 },
                      textFormat: {
                        foregroundColor: { red: 1, green: 1, blue: 1 },
                        bold: true,
                      },
                    },
                  },
                  fields: "userEnteredFormat(backgroundColor,textFormat)",
                },
              },
            ],
          },
        });
      }
    } catch (e) {
      console.log("Sheet init skipped or failed", e);
    }

    // 5. Append Data
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:J",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString().split("T")[0],
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

    // 6. Send Emails (Using EJS Templates)
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // A. Admin Email (You receive this)
      const adminTemplate = path.join(
        process.cwd(),
        "email-templates",
        "contact-admin-notification.ejs",
      );
      const adminHtml = await ejs.renderFile(adminTemplate, {
        ...validatedData,
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `🔔 New Enquiry: ${validatedData.firstName} (${validatedData.interest})`,
        html: adminHtml,
      });

      // B. Student Email (They receive this)
      const studentTemplate = path.join(
        process.cwd(),
        "email-templates",
        "contact-confirmation.ejs",
      );
      const studentHtml = await ejs.renderFile(studentTemplate, {
        firstName: validatedData.firstName,
        interest: validatedData.interest,
        year: new Date().getFullYear(),
      });

      await transporter.sendMail({
        from: `"Student Choice Education" <${process.env.GMAIL_USER}>`,
        to: validatedData.email,
        subject: `We received your enquiry, ${validatedData.firstName}!`,
        html: studentHtml,
      });
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error: unknown) {
    if (error instanceof z.ZodError)
      return { success: false, message: error.issues[0].message };
    console.error("Contact Form Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}

// ==========================================
//  PART B: ELIGIBILITY WIZARD LOGIC
// ==========================================

const eligibilitySchema = z.object({
  educationLevel: z.string().min(1, "Required"),
  grades: z.string().min(1, "Required"),
  englishLevel: z.string().min(1, "Required"),
  destination: z.string().min(1, "Required"),
  subject: z.string().min(1, "Required"),
  fullName: z.string().min(2, "Name required"),
  email: z.string().email(),
  phone: z.string().min(8, "Valid phone required"),
});

export async function submitEligibility(
  prevState: FormState,
  formData: FormData,
): Promise<{ success: boolean; message: string }> {
  try {
    const rawData = {
      educationLevel: formData.get("educationLevel") as string,
      grades: formData.get("grades") as string,
      englishLevel: formData.get("englishLevel") as string,
      destination: formData.get("destination") as string,
      subject: formData.get("subject") as string,
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
    };

    const validated = eligibilitySchema.parse(rawData);

    // 1. Google Sheets (Reusing existing Auth)
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(
          /\\n/g,
          "\n",
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Append to SAME Sheet (Mapping fields to match Contact Form columns)
    // Columns: [Date, Interest, FName, LName, Email, Phone, StartYear, Level, Dest, Message]
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:J",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            new Date().toISOString().split("T")[0],
            "Eligibility Check", // Mapped to 'Interest'
            validated.fullName.split(" ")[0], // First Name
            validated.fullName.split(" ").slice(1).join(" ") || ".", // Last Name
            validated.email,
            validated.phone,
            "N/A", // Start Year
            validated.educationLevel, // Level
            validated.destination,
            `Subject: ${validated.subject} | Grades: ${validated.grades} | English: ${validated.englishLevel}`, // Mapped to 'Message'
          ],
        ],
      },
    });

    // 2. Send Emails (Using EJS Templates)
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // A. Admin Email (Eligibility Template)
      const adminTemplate = path.join(
        process.cwd(),
        "email-templates",
        "eligibility-admin.ejs",
      );
      const adminHtml = await ejs.renderFile(adminTemplate, { ...validated });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `🎯 New Eligibility Lead: ${validated.fullName}`,
        html: adminHtml,
      });

      // B. Student Email (Eligibility Template)
      const studentTemplate = path.join(
        process.cwd(),
        "email-templates",
        "eligibility-student.ejs",
      );
      const studentHtml = await ejs.renderFile(studentTemplate, {
        firstName: validated.fullName.split(" ")[0],
        destination: validated.destination,
        year: new Date().getFullYear(),
      });

      await transporter.sendMail({
        from: `"Student Choice Education" <${process.env.GMAIL_USER}>`,
        to: validated.email,
        subject: `We've received your assessment`,
        html: studentHtml,
      });
    }

    return { success: true, message: "Check complete!" };
  } catch (error) {
    console.error("Eligibility Error:", error);
    return { success: false, message: "Submission failed." };
  }
}
