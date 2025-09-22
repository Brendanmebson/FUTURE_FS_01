const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if(!name || !email || !message) {
    return res.status(400).json({ error: 'Please provide name, email and message' });
  }

  try {
    // Save to DB only
    const msg = new Message({ name, email, subject, message });
    await msg.save();

    res.json({ success: true, message: 'Message saved to database' });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
