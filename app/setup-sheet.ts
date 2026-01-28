"use server";

import { google } from "googleapis";

export async function formatMySheet() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // Fix newlines in private key safely
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const sheetId = 0; // "0" is always the first tab ("Sheet1")

    // Define the "Style Rules"
    const requests = [
      // 1. FREEZE Header Row
      {
        updateSheetProperties: {
          properties: {
            sheetId: sheetId,
            gridProperties: { frozenRowCount: 1 },
          },
          fields: "gridProperties.frozenRowCount",
        },
      },
      // 2. STYLE Header Row (Dark Blue & Bold White Text)
      {
        repeatCell: {
          range: { sheetId: sheetId, startRowIndex: 0, endRowIndex: 1 },
          cell: {
            userEnteredFormat: {
              backgroundColor: { red: 0.1, green: 0.2, blue: 0.4 }, // Dark Navy
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
      // 3. RESIZE Message Column (Column I is index 8) to be wide
      {
        updateDimensionProperties: {
          range: {
            sheetId: sheetId,
            dimension: "COLUMNS",
            startIndex: 8,
            endIndex: 9,
          },
          properties: { pixelSize: 400 },
          fields: "pixelSize",
        },
      },
      // 4. RESIZE other columns to be standard width
      {
        updateDimensionProperties: {
          range: {
            sheetId: sheetId,
            dimension: "COLUMNS",
            startIndex: 0,
            endIndex: 8,
          },
          properties: { pixelSize: 160 },
          fields: "pixelSize",
        },
      },
      // 5. ENABLE Text Wrapping for the whole sheet
      {
        repeatCell: {
          range: { sheetId: sheetId },
          cell: {
            userEnteredFormat: {
              wrapStrategy: "WRAP",
              verticalAlignment: "TOP",
            },
          },
          fields: "userEnteredFormat(wrapStrategy,verticalAlignment)",
        },
      },
    ];

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: { requests },
    });

    return { success: true, message: "Sheet design updated successfully!" };
  } catch (error) {
    console.error("Format Error:", error);
    return { success: false, message: "Failed to format sheet." };
  }
}
