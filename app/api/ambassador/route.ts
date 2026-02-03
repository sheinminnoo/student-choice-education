import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // 1. Extract Data
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const languages = formData.get("languages") as string;
    const socialLink = formData.get("socialLink") as string;
    const currentCityCountry = formData.get("currentCityCountry") as string;
    const postalCode = formData.get("postalCode") as string;
    const currentStudy = formData.get("currentStudy") as string;
    const destination = formData.get("destination") as string;
    const motivation = formData.get("motivation") as string;
    const cvFile = formData.get("cv") as File | null;

    // 2. Prepare CV Attachment
    const attachments = [];
    let cvStatus = "No CV";
    let hasCV = false;

    if (cvFile && cvFile.size > 0) {
      const arrayBuffer = await cvFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: `${fullName.replace(/\s+/g, "_")}_CV.pdf`,
        content: buffer,
      });
      cvStatus = "Sent via Email";
      hasCV = true;
    }

    // 3. Auth & Sheets
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
    const tabName = "Ambassadors";

    // 4. SMART SHEET SETUP (The Fix)
    let sheetId: number | null | undefined = null;
    let needsHeaders = false;

    try {
      // Try to read A1 to see if tab exists
      const check = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${tabName}!A1`,
      });

      // If tab exists but A1 is empty (or just "undefined"), we need headers
      if (!check.data.values || check.data.values.length === 0) {
        needsHeaders = true;
        // Fetch the sheetId for this existing tab
        const meta = await sheets.spreadsheets.get({ spreadsheetId });
        sheetId = meta.data.sheets?.find((s) => s.properties?.title === tabName)
          ?.properties?.sheetId;
      }
    } catch (error) {
      // Tab does NOT exist -> Create it
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
      sheetId = newSheet.data.replies?.[0].addSheet?.properties?.sheetId;
      needsHeaders = true;
    }

    // 5. Apply Design & Headers (Only if needed)
    if (needsHeaders && sheetId !== undefined && sheetId !== null) {
      // A. Write Header Text
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${tabName}!A1:N1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              "STATUS",
              "Date",
              "Full Name",
              "Email",
              "Phone",
              "Languages",
              "Social Profile",
              "Location",
              "Post Code",
              "Current Study",
              "Preferred Dest.",
              "Motivation",
              "CV Status",
              "ADMIN NOTES",
            ],
          ],
        },
      });

      // B. Apply Blue Styling & Column Widths
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            // Blue Background & White Text for Header
            {
              repeatCell: {
                range: { sheetId, startRowIndex: 0, endRowIndex: 1 },
                cell: {
                  userEnteredFormat: {
                    backgroundColor: { red: 0.09, green: 0.1, blue: 0.2 },
                    textFormat: {
                      foregroundColor: { red: 1, green: 1, blue: 1 },
                      bold: true,
                      fontSize: 10,
                      fontFamily: "Verdana",
                    },
                    horizontalAlignment: "CENTER",
                    verticalAlignment: "MIDDLE",
                  },
                },
                fields:
                  "userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)",
              },
            },
            // Wrap Text for Data Rows
            {
              repeatCell: {
                range: { sheetId, startRowIndex: 1 },
                cell: {
                  userEnteredFormat: {
                    wrapStrategy: "WRAP",
                    verticalAlignment: "TOP",
                    textFormat: { fontSize: 10, fontFamily: "Arial" },
                  },
                },
                fields:
                  "userEnteredFormat(wrapStrategy,verticalAlignment,textFormat)",
              },
            },
            // Column Widths
            {
              updateDimensionProperties: {
                range: {
                  sheetId,
                  dimension: "COLUMNS",
                  startIndex: 0,
                  endIndex: 1,
                },
                properties: { pixelSize: 120 },
                fields: "pixelSize",
              },
            }, // Status
            {
              updateDimensionProperties: {
                range: {
                  sheetId,
                  dimension: "COLUMNS",
                  startIndex: 2,
                  endIndex: 4,
                },
                properties: { pixelSize: 180 },
                fields: "pixelSize",
              },
            }, // Name/Email
            {
              updateDimensionProperties: {
                range: {
                  sheetId,
                  dimension: "COLUMNS",
                  startIndex: 11,
                  endIndex: 12,
                },
                properties: { pixelSize: 350 },
                fields: "pixelSize",
              },
            }, // Motivation
            // Status Dropdown
            {
              setDataValidation: {
                range: {
                  sheetId,
                  startRowIndex: 1,
                  endRowIndex: 1000,
                  startColumnIndex: 0,
                  endColumnIndex: 1,
                },
                rule: {
                  condition: {
                    type: "ONE_OF_LIST",
                    values: [
                      { userEnteredValue: "🆕 New" },
                      { userEnteredValue: "👀 Reviewing" },
                      { userEnteredValue: "📞 Contacted" },
                      { userEnteredValue: "✅ Accepted" },
                      { userEnteredValue: "❌ Rejected" },
                    ],
                  },
                  showCustomUi: true,
                  strict: true,
                },
              },
            },
            // Alternating Row Colors
            {
              addBanding: {
                bandedRange: {
                  range: { sheetId, startRowIndex: 1 },
                  rowProperties: {
                    firstBandColor: { red: 1, green: 1, blue: 1 },
                    secondBandColor: { red: 0.96, green: 0.98, blue: 1 },
                  },
                },
              },
            },
          ],
        },
      });
    }

    // 6. Append Data (Row 2 onwards)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A:N`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            "🆕 New",
            new Date().toISOString().split("T")[0],
            fullName,
            email,
            phone,
            languages,
            socialLink,
            currentCityCountry,
            postalCode,
            currentStudy,
            destination,
            motivation,
            cvStatus,
            "",
          ],
        ],
      },
    });

    // 7. Send Emails
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      // Admin Email
      const adminTemplatePath = path.join(
        process.cwd(),
        "email-templates",
        "ambassador-admin-notification.ejs",
      );
      const adminHtml = await ejs.renderFile(adminTemplatePath, {
        fullName,
        email,
        phone,
        languages,
        socialLink,
        location: currentCityCountry,
        postalCode,
        study: currentStudy,
        destination,
        motivation,
        hasCV,
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `🌟 New Ambassador App: ${fullName}`,
        html: adminHtml,
        attachments: attachments,
      });

      // Student Email
      const studentTemplatePath = path.join(
        process.cwd(),
        "email-templates",
        "ambassador-confirmation.ejs",
      );
      const studentHtml = await ejs.renderFile(studentTemplatePath, {
        name: fullName.split(" ")[0],
        year: new Date().getFullYear(),
      });

      await transporter.sendMail({
        from: `"Student Choice Education" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `Application Received: Student Ambassador Program`,
        html: studentHtml,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Ambassador API Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 },
    );
  }
}
