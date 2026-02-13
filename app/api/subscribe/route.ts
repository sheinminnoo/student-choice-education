import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, source } = await req.json();
    if (!email || !email.includes("@"))
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 },
      );

    const sourceLabel = source || "Website Footer";
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
    const tabName = "Subscribers";

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
          requestBody: { values: [["Time (UK)", "Email", "Source"]] },
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
                    },
                  },
                  fields:
                    "userEnteredFormat(backgroundColor,textFormat,wrapStrategy)",
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
              }, // <-- FIXED
              {
                updateDimensionProperties: {
                  range: {
                    sheetId,
                    dimension: "COLUMNS",
                    startIndex: 1,
                    endIndex: 3,
                  },
                  properties: { pixelSize: 250 },
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
      range: `${tabName}!A:C`,
      valueInputOption: "USER_ENTERED",
      requestBody: { values: [[ukTime, email, sourceLabel]] },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe Error:", error);
    return NextResponse.json(
      { success: false, error: "Server Error" },
      { status: 500 },
    );
  }
}
