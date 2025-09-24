require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRouter = require('./routes/contact');

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ Allowed origins (update with your frontend URLs)
const allowedOrigins = [
  "http://localhost:5173",                 // Vite dev server
  "https://future-interns-task1.vercel.app" // deployed frontend on Vercel
];

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
  })
);

// ✅ API routes
app.use('/api/contact', contactRouter);

// ✅ Root route for testing
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// ✅ Catch-all (for 404s)
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// ✅ Connect DB and start server
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI; // from .env

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB connected");   // 👈 your success log
    app.listen(PORT, () =>
      console.log(`⚡ Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
