import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true });

    try {
      // ✅ Backend URL priority:
      // 1. .env (VITE_API_BASE)
      // 2. localhost (dev)
      // 3. Render deployment (fallback)
      const base =
        import.meta.env.VITE_API_BASE ||
        (window.location.hostname === "localhost"
          ? "http://localhost:5000"
          : "https://futureinterns-task1.onrender.com");

      await axios.post(`${base}/api/contact`, form);

      setStatus({ success: true, msg: 'Message sent — thank you!' });
      setForm({ name:'', email:'', subject:'', message:'' });
    } catch(err) {
      setStatus({ error: true, msg: err?.response?.data?.error || 'Something went wrong' });
    }
  };

  return (
    <>
      <Helmet><title>Contact — Brendan</title></Helmet>

      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '80vh',
          px: 2
        }}
      >
        <Typography variant="h4" sx={{ mb:3, fontWeight:700, color:"white" }}>
          Contact Me
        </Typography>

        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ 
            display:'flex', 
            flexDirection:'column', 
            gap:2, 
            width:'100%', 
            maxWidth:700,
            backgroundColor:'rgba(255,255,255,0.03)',
            p:4,
            borderRadius:2,
            boxShadow:3
          }}
        >
          {status?.success && <Alert severity="success">{status.msg}</Alert>}
          {status?.error && <Alert severity="error">{status.msg}</Alert>}

          <TextField 
            label="Name" 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required 
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <TextField 
            label="Email" 
            name="email" 
            type="email" 
            value={form.email} 
            onChange={handleChange} 
            required 
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <TextField 
            label="Subject" 
            name="subject" 
            value={form.subject} 
            onChange={handleChange} 
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <TextField 
            label="Message" 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            multiline 
            rows={6} 
            required 
            InputLabelProps={{ style: { color: "white" } }}
            InputProps={{ style: { color: "white" } }}
          />

          <Button type="submit" variant="contained" disabled={status?.loading}>
            {status?.loading ? "Sending..." : "Send message"}
          </Button>

          <Typography sx={{ color:'var(--muted)', fontSize:13, textAlign:"center" }}>
            This message will be stored in my database and I’ll get an email notification.
          </Typography>
        </Box>
      </Box>
    </>
  )
}
