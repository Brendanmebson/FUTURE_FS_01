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
  "https://future-interns-task1.vercel.app" ,// deployed frontend
  "https://futureinterns-task1.vercel.app"    // without dash

];

// ✅ Centralized CORS config (with preview deploy + Postman support)
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // server-to-server or Postman

    if (
      allowedOrigins.includes(origin) ||
      /\.vercel\.app$/.test(origin) // ✅ allow all vercel preview subdomains
    ) {
      return callback(null, true);
    }

    console.error("❌ Blocked by CORS:", origin);
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
}));

// ✅ MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Routes
app.use('/api/contact', contactRouter);

// ✅ Root route (for Render health check)
app.get('/', (req, res) => res.send('Portfolio backend up 🚀'));

// ✅ Global Error Handler (safe response for production)
app.use((err, req, res, next) => {
  console.error("🔥 Error:", err.stack || err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.expose ? err.message : "Something went wrong. Please try again.",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
