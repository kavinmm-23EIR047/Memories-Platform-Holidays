const express = require("express");
const { google } = require("googleapis");
const router = express.Router();
require("dotenv").config();

// ✅ Google Sheets Setup
const credentials = {
  type: "service_account",
  project_id: process.env.GOOGLE_PROJECT_ID,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  client_id: process.env.GOOGLE_CLIENT_ID,
};

const SHEET_ID = "1GPlGa7k_KOsGtFHwj5nd14WE31CN-VpvwZJp3d8yf8I"; // Your Google Sheet ID
const SHEET_NAME = "feedback"; // Sheet tab name

let sheets;
try {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  sheets = google.sheets({ version: "v4", auth });
} catch (err) {
  console.error("❌ Google Sheets auth error:", err.message);
}

// ✅ Load Feedbacks from Google Sheets (C to H)
async function loadFeedbacks() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!C2:H`,
    });

    const rows = response.data.values || [];

    return rows.map((row) => ({
      starRating: row[0] || "",
      comment: row[1] || "",
      name: row[2] || "Anonymous",
      image: row[3] || "",
      date: row[5] || "",
    }));
  } catch (err) {
    console.error("❌ Error loading feedbacks:", err.message);
    return [];
  }
}

// ✅ Append a new feedback row
async function appendFeedback({ starRating, comment, name, image, date }) {
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!C:H`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[starRating, comment, name, image, "", date]], // skip G with ""
      },
    });
  } catch (err) {
    console.error("❌ Error saving feedback:", err.message);
    throw err;
  }
}

// ✅ POST /api/feedback
router.post("/feedback", async (req, res) => {
  const { name, comment, rating, image = "", date = new Date().toISOString() } = req.body;

  if (!name || !comment || !rating) {
    return res.status(400).json({ error: "Name, comment, and rating are required" });
  }

  try {
    await appendFeedback({ starRating: rating, comment, name, image, date });
    res.status(200).json({ success: true, message: "Feedback submitted successfully" });
  } catch (err) {
    console.error("❌ Failed to submit feedback:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ GET /api/feedbacks
router.get("/feedbacks", async (req, res) => {
  try {
    const feedbacks = await loadFeedbacks();
    res.json(feedbacks);
  } catch (err) {
    console.error("❌ Failed to fetch feedbacks:", err.message);
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

// ❌ PATCH not supported
router.patch("/feedback/star/:id", (req, res) => {
  return res.status(501).json({
    error: "Star functionality not supported in Google Sheets version",
  });
});

module.exports = router;