import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // 1. Get 'email' AND 'source' from the frontend
    const { email, source } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Invalid email" },
        { status: 400 },
      );
    }

    // Default to "Website Footer" if no specific source is sent
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

    // 2. Check/Create Tab Logic
    try {
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: `${tabName}!A1`,
      });
    } catch (error) {
      // If tab doesn't exist, create it
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

      const sheetId = newSheet.data.replies?.[0].addSheet?.properties?.sheetId;

      // Add Headers
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${tabName}!A1:C1`,
        valueInputOption: "USER_ENTERED",
        requestBody: { values: [["Date", "Email", "Source"]] },
      });

      // Style Headers (Blue Background, White Text)
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
                      backgroundColor: { red: 0.09, green: 0.1, blue: 0.2 },
                      textFormat: {
                        foregroundColor: { red: 1, green: 1, blue: 1 },
                        bold: true,
                      },
                    },
                  },
                  fields: "userEnteredFormat(backgroundColor,textFormat)",
                },
              },
              {
                updateDimensionProperties: {
                  range: {
                    sheetId,
                    dimension: "COLUMNS",
                    startIndex: 1,
                    endIndex: 2,
                  },
                  properties: { pixelSize: 250 },
                  fields: "pixelSize",
                },
              },
            ],
          },
        });
      }
    }

    // 3. Append Data
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A:C`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[new Date().toISOString().split("T")[0], email, sourceLabel]],
      },
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
