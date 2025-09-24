require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRouter = require('./routes/contact');

const app = express();
app.use(express.json());

// ✅ Allowed origins
const allowedOrigins = [
  "http://localhost:5173",                 // local dev
  "https://future-interns-task1.vercel.app", // deployed frontend
  "https://futureinterns-task1.vercel.app"    // without dash
];

// ✅ Single CORS middleware (handles preflight OPTIONS too)
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error("❌ Blocked by CORS:", origin);
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"], // 👈 allow preflight & POST
    allowedHeaders: ["Content-Type"],    // 👈 allow JSON requests
    credentials: true,
  })
);

// ✅ Routes
app.use('/api/contact', contactRouter);

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// ✅ Catch-all
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// ✅ Connect DB & Start server
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
