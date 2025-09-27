import React from 'react';
import { Box, Typography, Button, Stack, Chip, IconButton, Divider, Grid, Paper } from '@mui/material';
import AvatarImg from '../assets/avatar.png'; 
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

// MUI icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EmailIcon from '@mui/icons-material/Email';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SchoolIcon from '@mui/icons-material/School';

const skills = ['React', 'Node.js', 'MongoDB', 'MUI', 'TypeScript', 'Vite', 'MERN'];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Brendan — Full-stack Dev</title>
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
          alignItems: 'center',
          textAlign: { xs: 'center', md: 'left' },
          mt: 8
        }}
      >
        {/* Avatar with Glow */}
        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              inset: -12,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00bcd4, #673ab7)',
              filter: 'blur(60px)',
              opacity: 0.55,
              zIndex: 0,
              animation: 'pulseGlow 3s infinite alternate'
            }}
          />
          <img
            src={AvatarImg}
            alt="Brendan"
            style={{
              width: '100%',
              maxWidth: '240px',
              borderRadius: '14px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.55)',
              position: 'relative',
              zIndex: 1,
              transition: 'transform 0.4s ease',
            }}
            className="hover-scale"
          />
        </Box>

        {/* Intro Text */}
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="h3"
            sx={{
              mb: 1,
              fontWeight: 800,
              fontSize: { xs: '2.3rem', md: '3.4rem' },
              background: 'linear-gradient(to right,rgb(255, 255, 255),rgba(177, 183, 58, 0.46))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Hi, I’m Brendan 👋
          </Typography>

          <Typography sx={{ mb: 3, color: 'var(--muted)', fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.6 }}>
            Full-Stack Developer passionate about crafting clean, functional, and engaging 
            digital experiences. I specialize in building modern web and mobile apps 
            that solve real problems while being smooth and enjoyable to use.
          </Typography>

          {/* Skills */}
          <Stack 
            direction="row"
            spacing={1}
            sx={{ mb: 4, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}
          >
            {skills.map(s => (
              <Chip
                key={s}
                label={s}
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'rgba(255,255,255,0.25)',
                  transition: 'all 0.3s',
                  fontWeight: 500,
                  '&:hover': { 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    transform: 'scale(1.05)' 
                  }
                }}
              />
            ))}
          </Stack>

          {/* Buttons + Social Icons */}
          <Stack 
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            flexWrap="wrap"
          >
            <Button 
              variant="contained" 
              component={RouterLink} 
              to="/projects"
              sx={{ px: 3, fontWeight: 600 }}
            >
              See Projects
            </Button>

            {[ 
              { icon: <GitHubIcon />, link: 'https://github.com/Brendanmebson' },
              { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/kamsiyochukwumebuge' },
              { icon: <TwitterIcon />, link: 'https://twitter.com/' }
            ].map((social, idx) => (
              <IconButton 
                key={idx}
                href={social.link} 
                target="_blank" 
                rel="noopener" 
                sx={{ 
                  color: 'white',
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'scale(1.2)', color: '#00bcd4' }
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* ===== ABOUT SECTION ===== */}
      <Box sx={{ mt: 12 }}>
        <Typography 
          variant="h5" 
          sx={{ mb: 5, textAlign: 'center', fontWeight: 700, letterSpacing: 0.5 }}
        >
          <EmojiObjectsIcon sx={{ mr:1, verticalAlign:'middle' }}/> About Me
        </Typography>
        <Typography sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center', color: 'var(--muted)', lineHeight: 1.7 }}>
          I’m a software developer with experience across frontend, backend, and mobile development. 
          I enjoy bringing ideas to life with React, MERN, and React Native — making sure apps are clean, scalable, and user-friendly.
        </Typography>
      </Box>

      {/* ===== EXPERIENCE SECTION ===== */}
      <Box sx={{ mt: 12 }}>
        <Typography 
          variant="h5" 
          sx={{ mb: 5, textAlign: 'center', fontWeight: 700, letterSpacing: 0.5 }}
        >
          <WorkOutlineIcon sx={{ mr:1, verticalAlign:'middle' }}/> Experience
        </Typography>

        <Box 
          sx={{ 
            display: 'grid',
            gap: 4,
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }
          }}
        >
          {[
            { company: 'Zojatech', role: 'Frontend Developer', time: '2024 — 2025', desc: 'Built Fontend webapps and interfaces in React and MUI.' },
            { company: 'Future Interbs', role: 'Full-stack Developer (Intern)', time: '2024 — Present', desc: 'Given the opportunity to showcase my skills with multiple projects.' },
            { company: 'Upwork/Fiverr', role: 'Fullstack developer', time: '2025 - Present', desc: 'Delivered freelance projects in different programming language.' },
            { company: 'Rockview (HOTR)', role: 'Fullstack Developer (Contract)', time: '2024 — 2024', desc: 'Developed a Church Attendance Report Aggregation web app.' },
          ].map(exp => (
            <Box 
              key={exp.company}
              sx={{
                p: 3,
                borderRadius: 3,
                background: 'rgba(255,255,255,0.05)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                transition: 'all 0.35s',
                '&:hover': { 
                  transform: 'translateY(-6px) scale(1.02)',
                  background: 'rgba(255,255,255,0.07)' 
                }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{exp.role}</Typography>
              <Typography sx={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                {exp.company} — {exp.time}
              </Typography>
              <Typography sx={{ mt: 1, fontSize: '0.95rem', lineHeight: 1.5 }}>{exp.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ===== EDUCATION SECTION ===== */}
      <Box sx={{ mt: 12 }}>
        <Typography 
          variant="h5" 
          sx={{ mb: 5, textAlign: 'center', fontWeight: 700, letterSpacing: 0.5 }}
        >
          <SchoolIcon sx={{ mr:1, verticalAlign:'middle' }}/> Education
        </Typography>
        <Box sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
          <Typography variant="h6">Babcock University</Typography>
          <Typography sx={{ fontSize: '0.95rem', color: 'var(--muted)' }}>Software Engineering (BSc) — 2025</Typography>
          <Typography sx={{ mt: 1, fontSize: '0.95rem', lineHeight: 1.5 }}>
            Specialized in software development, artificial intelligence, and full-stack engineering.
          </Typography>
        </Box>
      </Box>

      {/* ===== PROJECTS SECTION ===== */}
      <Box sx={{ mt: 12 }}>
        <Typography 
          variant="h5" 
          sx={{ mb: 5, textAlign: 'center', fontWeight: 700, letterSpacing: 0.5 }}
        >
          <RocketLaunchIcon sx={{ mr:1, verticalAlign:'middle' }}/> Featured Projects
        </Typography>

        <Box 
          sx={{ 
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' }
          }}
        >
          {[
            { title: 'Unilert', desc: 'Emergency alert system with witness reporting, camera capture & officer dashboard.' },
            { title: 'Transport Fare Comparison', desc: 'Compare fares across ride-hail platforms, suggest best option.' },
            { title: 'Rockview', desc: 'Church Attendance Report Aggregation WebApp for HOTR.' },
          ].map((p) => (
            <Box
              key={p.title}
              sx={{
                width: { xs: '100%', sm: 300, md: 320 },
                p: 3,
                borderRadius: 3,
                background: 'linear-gradient(145deg, #111,rgb(26, 40, 59))',
                boxShadow: '0 8px 25px rgba(0,0,0,0.35)',
                transition: 'all 0.35s',
                '&:hover': { transform: 'translateY(-6px) scale(1.02)' }
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>{p.title}</Typography>
              <Typography sx={{ color: 'var(--muted)', mt: 1, lineHeight: 1.5 }}>{p.desc}</Typography>
              <Button 
                size="small" 
                sx={{ mt: 2, fontWeight: 500 }}
                component={RouterLink} 
                to="/projects"
              >
                View Project
              </Button>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ===== CONTACT SECTION ===== */}
      <Box sx={{ mt: 14, textAlign: 'center' }}>
        <Divider sx={{ mb: 5, background: 'rgba(255,255,255,0.1)' }} />
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
          <EmailIcon sx={{ mr:1, verticalAlign:'middle' }}/> Let’s Build Something Together
        </Typography>
        <Typography sx={{ mb: 3, color: 'var(--muted)', maxWidth: 600, mx: 'auto', lineHeight: 1.6 }}>
          Have an idea, opportunity, or collaboration in mind? I’d love to hear it — 
          let’s create something impactful together.
        </Typography>
        <Button 
                size="small" 
                sx={{ mt: 2, fontWeight: 500 }}
                component={RouterLink} 
                to="/contact"
              >
          Say Hello
        </Button>
      </Box>

      {/* Small Glow Animation */}
      <style>
        {`
          @keyframes pulseGlow {
            from { opacity: 0.4; transform: scale(0.95); }
            to { opacity: 0.7; transform: scale(1.05); }
          }
          .hover-scale:hover {
            transform: scale(1.05);
          }
        `}
      </style>
    </>
  );
}
