const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const feedbackRoutes = require("./feedbackRoutes"); // Feedback route
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Google Sheets Setup
const credentials = require("./google-credentials.json");
const SHEET_ID = "1GPlGa7k_KOsGtFHwj5nd14WE31CN-VpvwZJp3d8yf8I"; // 🔁 Replace with your actual Google Sheet ID

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
const sheets = google.sheets({ version: "v4", auth });

// ✨ Error Handling for Crashes
process.on("uncaughtException", (err) => {
  console.error("[CRASH] Uncaught Exception:", err);
});
process.on("unhandledRejection", (err) => {
  console.error("[CRASH] Unhandled Rejection:", err);
});

// ✨ Middleware
app.use(express.json({ limit: "2mb" }));

// ✅ Properly apply CORS
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ["GET", "POST", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
}));
// ✅ Health Check
app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

// ✅ Contact Form Handler (stored in Google Sheets, tab: Contact)
app.post("/api/contact", async (req, res) => {
  const { name, people, days, pickup, destination, email, contact } = req.body;

  if (!name || !people || !days || !pickup || !destination || !email || !contact) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const bookingData = [
    name,
    people,
    days,
    pickup,
    destination,
    email,
    contact,
    new Date().toISOString(),
  ];

  try {
    // ✅ Save to Google Sheets (Contact tab)
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Contact!A:H",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [bookingData],
      },
    });

    // ✅ Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Bus Booking Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "🚌 New Bus Booking Request",
      html: `
        <h2>📝 New Bus Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contact}</p>
        <p><strong>No. of People:</strong> ${people}</p>
        <p><strong>No. of Days:</strong> ${days}</p>
        <p><strong>Pickup Point:</strong> ${pickup}</p>
        <p><strong>Destination Places:</strong><br/>${destination}</p>
        <p><strong>Submitted At:</strong> ${bookingData[7]}</p>
      `,
    });

    res.status(200).json({ success: true, message: "Form submitted and email sent!" });
  } catch (err) {
    console.error("[ERROR] Contact form error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ✅ Feedback Routes (also uses Google Sheets internally)
app.use("/api", feedbackRoutes);

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`[SERVER] ✅ Listening at http://localhost:${PORT}`);
});
