"use server";

import { google } from "googleapis";
import { z } from "zod";

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
  // Strict Phone: Must start with + and be 8-15 digits
  phone: z
    .string()
    .regex(/^\+\d{7,15}$/, "Phone must include country code (e.g. +44...)"),
  interest: z.string().min(1, "Please select a help topic"),

  // Mandatory Dropdowns
  startYear: z.string().min(1, "Please select a start year"),
  studyLevel: z.string().min(1, "Please select a study level"),
  destination: z.string().min(1, "Please select a destination"),

  // Mandatory Message (min 10 chars)
  message: z
    .string()
    .min(10, "Please provide more details (at least 10 characters)")
    .max(2000, "Message is too long")
    .trim(),

  sourcePage: z.string().optional(),
  honeyPot: z.string().max(0), // Anti-spam
});

export async function submitToGoogleSheet(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    // --- 2. SANITIZE DATA (Fixes "received null" error) ---
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
      honeyPot: (formData.get("job_role_hidden") as string) || "",
    };

    // --- 3. VALIDATE ---
    const validatedData = formSchema.parse(rawData);

    // --- 4. AUTHENTICATE ---
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // --- 5. SMART SHEET SETUP (Auto-creates columns if missing) ---
    const checkHeader = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A1",
    });

    if (!checkHeader.data.values || checkHeader.data.values.length === 0) {
      // Create Headers
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: "Sheet1!A1:K1",
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

      // Apply Professional Design
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
                  startIndex: 10,
                  endIndex: 11,
                },
                properties: { pixelSize: 400 },
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

    // --- 6. APPEND DATA ---
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:K",
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
