import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
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

    const attachments = [];
    let cvStatus = "No CV";
    let hasCV = false;
    if (cvFile && cvFile.size > 0) {
      const arrayBuffer = await cvFile.arrayBuffer();
      attachments.push({
        filename: `${fullName.replace(/\s+/g, "_")}_CV.pdf`,
        content: Buffer.from(arrayBuffer),
      });
      cvStatus = "Sent via Email";
      hasCV = true;
    }

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

    let sheetId: number | undefined;
    try {
      const meta = await sheets.spreadsheets.get({ spreadsheetId });
      const sheet = meta.data.sheets?.find(
        (s) => s.properties?.title === tabName,
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
        sheetId =
          newSheet.data.replies?.[0].addSheet?.properties?.sheetId ?? undefined;
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `${tabName}!A1`,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                "STATUS",
                "Time (UK)",
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
      }

      if (sheetId !== undefined) {
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [
              // 1. Header Styles
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
                    },
                  },
                  fields:
                    "userEnteredFormat(backgroundColor,textFormat,wrapStrategy)",
                },
              },

              // 2. Data Rows Style (WRAP)
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

              // 3. Dropdown Menu (Data Validation) - THIS WAS MISSING!
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

              // 4. Column Widths
              {
                updateDimensionProperties: {
                  range: {
                    sheetId,
                    dimension: "COLUMNS",
                    startIndex: 0,
                    endIndex: 14,
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
                    startIndex: 11,
                    endIndex: 12,
                  },
                  properties: { pixelSize: 450 },
                  fields: "pixelSize",
                },
              },
            ],
          },
        });
      }
    } catch (e) {
      console.error(e);
    }

    const ukTime = new Date().toLocaleString("en-GB", {
      timeZone: "Europe/London",
    });
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A:N`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            "🆕 New",
            ukTime,
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

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD.replace(/\s/g, ""),
        },
      });
      const adminHtml = await ejs.renderFile(
        path.join(
          process.cwd(),
          "email-templates",
          "ambassador-admin-notification.ejs",
        ),
        {
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
        },
      );
      await transporter.sendMail({
        from: `"Website Bot" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        replyTo: email,
        subject: `🌟 New Ambassador App: ${fullName}`,
        html: adminHtml,
        attachments,
      });
      const studentHtml = await ejs.renderFile(
        path.join(
          process.cwd(),
          "email-templates",
          "ambassador-confirmation.ejs",
        ),
        { name: fullName.split(" ")[0], year: new Date().getFullYear() },
      );
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
