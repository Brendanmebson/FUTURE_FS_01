import React from 'react';
import { Box, Typography, Button, Stack, Chip, IconButton } from '@mui/material';
import AvatarImg from '../assets/avatar.jpg'; // add your image to src/assets
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

// MUI icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter'; // or X if you want

const skills = ['React', 'Node.js', 'MongoDB', 'MUI', 'TypeScript', 'Vite', 'MERN'];

export default function Home(){
  return (
    <>
      <Helmet>
        <title>Brendan — Full-stack Dev</title>
      </Helmet>

      <Box sx={{ display: 'flex', gap: 4, alignItems: 'center', flexWrap: 'wrap' }}>
        <Box sx={{ flex: '0 0 220px' }} className="card-3d">
          <img src={AvatarImg} alt="Brendan" className="hero-avatar" />
        </Box>

        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ mb:1, fontWeight:700 }}>Hi, I’m Brendan 👋</Typography>
          <Typography sx={{ mb:2, color: 'var(--muted)' }}>
            A Full-Stack Developer who loves turning ideas into clean, functional, and user-friendly digital experiences. My focus is on building modern web and mobile applications that not only solve problems but also feel great to use.
          </Typography>

          {/* Skills */}
          <Stack direction="row" spacing={1} sx={{ mb:3, flexWrap: 'wrap' }}>
            {skills.map(s => (
              <Chip 
                key={s} 
                label={s} 
                variant="outlined" 
                sx={{ color:'white', borderColor:'rgba(255,255,255,0.06)' }} 
              />
            ))}
          </Stack>

          {/* Buttons + Social Icons */}
          <Stack direction="row" spacing={2} alignItems="center">
            <Button variant="contained" component={RouterLink} to="/projects">
              See Projects
            </Button>

            {/* Social media icons */}
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
              href="https://twitter.com/" // replace with your handle
              target="_blank" 
              rel="noopener" 
              sx={{ color: 'white' }}
            >
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>

      {/* Quick projects preview */}
      <Box sx={{ mt:6 }}>
        <Typography variant="h5" sx={{ mb:2 }}>Featured Projects</Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap:'wrap' }}>

          <Box sx={{ width: 320, background: 'linear-gradient(145deg,rgb(17, 11, 11),rgb(3, 20, 63))',}} className="card-3d">
            <Typography variant="h6">Unilert</Typography>
            <Typography sx={{ color:'var(--muted)', mt:1 }}>
              Emergency alert system, witness reporting, camera capture & officer dashboard.
            </Typography>
            <Button size="small" sx={{ mt:2 }} href="/projects">View</Button>
          </Box>

          <Box sx={{ width: 320, background: 'linear-gradient(145deg,rgb(17, 11, 11),rgb(3, 20, 63))',}} className="card-3d">            
            <Typography variant="h6">Transport Fare Comparison</Typography>
            <Typography sx={{ color:'var(--muted)', mt:1 }}>
              Compare fares across ride-hail platforms, suggest best option.
            </Typography>
            <Button size="small" sx={{ mt:2 }} href="/projects">View</Button>
          </Box>

          <Box sx={{ width: 320, background: 'linear-gradient(145deg,rgb(17, 11, 11),rgb(3, 20, 63))',}} className="card-3d">            
            <Typography variant="h6">Rockview</Typography>
            <Typography sx={{ color:'var(--muted)', mt:1 }}>
            About
            A Church Attendance Report Aggreation WebApp for HOTR            </Typography>
            <Button size="small" sx={{ mt:2 }} href="/projects">View</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
