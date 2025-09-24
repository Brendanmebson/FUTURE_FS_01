import React from 'react';
import { Box, Typography, Button, Stack, Chip, IconButton } from '@mui/material';
import AvatarImg from '../assets/avatar.jpg'; 
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

// MUI icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const skills = ['React', 'Node.js', 'MongoDB', 'MUI', 'TypeScript', 'Vite', 'MERN'];

export default function Home(){
  return (
    <>
      <Helmet>
        <title>Brendan — Full-stack Dev</title>
      </Helmet>

      {/* Hero Section */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, // stack on mobile, row on desktop
          gap: { xs: 3, md: 4 }, 
          alignItems: 'center', 
          flexWrap: 'wrap',
          textAlign: { xs: 'center', md: 'left' }, // center text on mobile
        }}
      >
        {/* Avatar */}
        <Box 
          sx={{ 
            flex: { xs: '0 0 auto', md: '0 0 220px' }, 
            width: { xs: 160, md: 220 }, 
            mx: { xs: 'auto', md: 0 } // center avatar on mobile
          }} 
          className="card-3d"
        >
          <img 
            src={AvatarImg} 
            alt="Brendan" 
            className="hero-avatar" 
            style={{ width: '100%' }}
          />
        </Box>

        {/* Text */}
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb:1, 
              fontWeight:700,
              fontSize: { xs: '2rem', md: '3rem' } // smaller on mobile
            }}
          >
            Hi, I’m Brendan 👋
          </Typography>

          <Typography 
            sx={{ 
              mb:2, 
              color: 'var(--muted)', 
              fontSize: { xs: '0.95rem', md: '1rem' } 
            }}
          >
            A Full-Stack Developer who loves turning ideas into clean, functional, 
            and user-friendly digital experiences. My focus is on building modern 
            web and mobile applications that not only solve problems but also feel 
            great to use.
          </Typography>

          {/* Skills */}
          <Stack 
            direction="row" 
            spacing={1} 
            sx={{ mb:3, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' } }}
          >
            {skills.map(s => (
              <Chip 
                key={s} 
                label={s} 
                variant="outlined" 
                sx={{ 
                  color:'white', 
                  borderColor:'rgba(255,255,255,0.06)' 
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
            <Button variant="contained" component={RouterLink} to="/projects">
              See Projects
            </Button>

            <IconButton 
              href="https://github.com/Brendanmebson" 
              target="_blank" 
              rel="noopener" 
              sx={{ color: 'white' }}
            >
              <GitHubIcon />
            </IconButton>

            <IconButton 
              href="https://www.linkedin.com/in/kamsiyochukwumebuge" 
              target="_blank" 
              rel="noopener" 
              sx={{ color: 'white' }}
            >
              <LinkedInIcon />
            </IconButton>

            <IconButton 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener" 
              sx={{ color: 'white' }}
            >
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      {/* Projects Preview */}
      <Box sx={{ mt:6 }}>
        <Typography 
          variant="h5" 
          sx={{ mb:2, textAlign: { xs: 'center', md: 'left' } }}
        >
          Featured Projects
        </Typography>

        <Box 
          sx={{ 
            display: 'flex', 
            gap: 2, 
            flexWrap:'wrap', 
            justifyContent: { xs: 'center', md: 'flex-start' } 
          }}
        >
          {[
            { title: 'Unilert', desc: 'Emergency alert system, witness reporting, camera capture & officer dashboard.' },
            { title: 'Transport Fare Comparison', desc: 'Compare fares across ride-hail platforms, suggest best option.' },
            { title: 'Rockview', desc: 'A Church Attendance Report Aggregation WebApp for HOTR.' },
          ].map((p) => (
            <Box 
              key={p.title} 
              sx={{ 
                width: { xs: '100%', sm: 300, md: 320 }, 
                p:2, 
                borderRadius: 2,
                background: 'linear-gradient(145deg,rgb(17, 11, 11),rgb(3, 20, 63))', 
              }} 
              className="card-3d"
            >
              <Typography variant="h6">{p.title}</Typography>
              <Typography sx={{ color:'var(--muted)', mt:1 }}>
                {p.desc}
              </Typography>
              <Button size="small" sx={{ mt:2 }} href="/projects">View</Button>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
