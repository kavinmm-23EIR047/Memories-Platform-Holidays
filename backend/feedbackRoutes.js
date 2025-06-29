const express = require("express");
const nodemailer = require("nodemailer");
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


const SHEET_ID = "1GPlGa7k_KOsGtFHwj5nd14WE31CN-VpvwZJp3d8yf8I"; // ✅ Your sheet ID
const SHEET_NAME = "feedback"; // ✅ Tab name inside your sheet

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });

// ✅ Load Feedbacks from Google Sheets
async function loadFeedbacks() {
  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A2:E`,
    });

    const rows = response.data.values || [];
    return rows.map(([id, name, email, comment, rating]) => ({
      id,
      name,
      email,
      comment,
      rating: parseInt(rating),
    }));
  } catch (err) {
    console.error("❌ Error loading feedbacks:", err.message);
    return [];
  }
}

// ✅ Append a new feedback row
async function appendFeedback({ id, name, email, comment, rating }) {
  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${SHEET_NAME}!A:E`,
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[id, name, email, comment, rating]],
      },
    });
  } catch (err) {
    console.error("❌ Error saving feedback:", err.message);
    throw err;
  }
}

// ✅ POST /api/feedback - Submit feedback
router.post("/feedback", async (req, res) => {
  const { name, email, comment, rating } = req.body;
  if (!name || !email || !comment || !rating) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const id = Date.now().toString();

  try {
    await appendFeedback({ id, name, email, comment, rating });

    // ✅ Send Email Notification
    const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;
    if (EMAIL_USER && EMAIL_PASS && EMAIL_TO) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Feedback Notifier" <${EMAIL_USER}>`,
        to: EMAIL_TO,
        subject: "📝 New Feedback Received",
        html: `
          <h2>New Feedback Submitted</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Rating:</strong> ${rating} ⭐</p>
          <p><strong>Comment:</strong><br/>${comment}</p>
        `,
      });
    }

    res.status(200).json({ success: true, message: "Feedback submitted successfully" });
  } catch (err) {
    console.error("❌ Failed to save feedback:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ GET /api/feedbacks - Fetch all feedbacks
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
