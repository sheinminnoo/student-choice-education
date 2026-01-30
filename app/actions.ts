"use server";

import { google } from "googleapis";
import { z } from "zod";
import nodemailer from "nodemailer";
import ejs from "ejs"; // <--- New Import
import path from "path"; // <--- New Import

// --- 1. STRICT TYPES & SCHEMA ---
export type FormState = {
  success: boolean;
  message: string;
};

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  phone: z
    .string()
    .regex(/^\+\d{7,15}$/, "Phone must include country code (e.g. +44...)"),
  interest: z.string().min(1, "Please select a help topic"),
  startYear: z.string().min(1, "Please select a start year"),
  studyLevel: z.string().min(1, "Please select a study level"),
  destination: z.string().min(1, "Please select a destination"),
  message: z
    .string()
    .min(10, "Please provide more details (at least 10 characters)")
    .max(2000, "Message is too long")
    .trim(),
  terms: z.string().refine((val) => val === "on", {
    message: "You must agree to the terms and privacy policy.",
  }),
  honeyPot: z.string().max(0),
});

export async function submitToGoogleSheet(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    // --- 2. SANITIZE DATA ---
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

    // --- 3. VALIDATE ---
    const validatedData = formSchema.parse(rawData);

    // --- 4. CHECK ENV VARS ---
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;

    if (!spreadsheetId || !clientEmail || !privateKey) {
      console.error(
        "Configuration Error: Missing Google Sheets Environment Variables",
      );
      return {
        success: false,
        message: "System Configuration Error. Please contact support.",
      };
    }

    // --- 5. AUTHENTICATE ---
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: (privateKey ?? "").split(String.raw`\n`).join("\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // --- 6. SHEET SETUP ---
    const checkHeader = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A1",
    });

    if (!checkHeader.data.values || checkHeader.data.values.length === 0) {
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
                      fontSize: 11,
                    },
                    horizontalAlignment: "CENTER",
                    verticalAlignment: "MIDDLE",
                  },
                },
                fields:
                  "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)",
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId: 0,
                  dimension: "COLUMNS",
                  startIndex: 9,
                  endIndex: 10,
                },
                properties: { pixelSize: 400 },
                fields: "pixelSize",
              },
            },
            {
              updateDimensionProperties: {
                range: {
                  sheetId: 0,
                  dimension: "COLUMNS",
                  startIndex: 0,
                  endIndex: 9,
                },
                properties: { pixelSize: 150 },
                fields: "pixelSize",
              },
            },
            {
              repeatCell: {
                range: { sheetId: 0 },
                cell: {
                  userEnteredFormat: {
                    wrapStrategy: "WRAP",
                    verticalAlignment: "TOP",
                  },
                },
                fields: "userEnteredFormat(wrapStrategy,verticalAlignment)",
              },
            },
          ],
        },
      });
    }

    // --- 7. APPEND DATA ---
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

    // --- 8. SEND EMAILS (Now using EJS!) ---
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        // A. Render Admin Email (For You)
        const adminTemplatePath = path.join(
          process.cwd(),
          "email-templates",
          "contact-admin-notification.ejs",
        );
        const adminHtml = await ejs.renderFile(adminTemplatePath, {
          ...validatedData, // Passes all fields (firstName, interest, message, etc.) to the template
        });

        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: process.env.GMAIL_USER,
          subject: `🔔 New Enquiry: ${validatedData.firstName} (${validatedData.interest})`,
          html: adminHtml, // <--- Sent as HTML
        });

        // B. Render Student Email (Confirmation)
        const studentTemplatePath = path.join(
          process.cwd(),
          "email-templates",
          "contact-confirmation.ejs",
        );
        const studentHtml = await ejs.renderFile(studentTemplatePath, {
          firstName: validatedData.firstName,
          interest: validatedData.interest,
          year: new Date().getFullYear(),
        });

        await transporter.sendMail({
          from: `"Student Choice Education" <${process.env.GMAIL_USER}>`,
          to: validatedData.email,
          subject: `We received your enquiry, ${validatedData.firstName}!`,
          html: studentHtml, // <--- Sent as HTML
        });

        console.log("Emails sent successfully!");
      } catch (emailError) {
        console.error("Email Notification Failed:", emailError);
      }
    }

    return { success: true, message: "Message sent successfully!" };
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.issues[0].message };
    }
    console.error("Submission Error:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
