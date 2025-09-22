import React from 'react';
import { Box, Typography, Chip, Stack, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import defaultImage from '../assets/default.jpg';
import rockview from '../assets/rockview.png';
import dxhub from '../assets/dxhub.png';
import buddyspend from '../assets/buddyspend.png';
import moviespot from '../assets/moviespot.png';
import pulseboard from '../assets/pulseboard.png';
import chatbuddy from '../assets/chatbuddy.png';


const projects = [
  {
    title: 'Unilert',
    desc: 'Web + Mobile app for campus emergency reporting, live alerts, officer dashboard.',
    tech: ['React', 'React Native', 'Node', 'MongoDB', 'Expo'],
    image: defaultImage,
    live: 'https://github.com/Brendanmebson/Unilert',
    github: 'https://github.com/Brendanmebson/Unilert'
  },
  {
    title: 'Rockview',
    desc: 'About A Church Attendance Report Aggreation WebApp for HOTR',
    tech: ['React', 'MERN', 'Node', 'MongoDB', 'Render'],
    image: rockview,
    live: 'https://rockview.vercel.app',
    github: 'https://github.com/Brendanmebson/Rockview'
  },
  {
    title: 'DxHub',
    desc: 'A tech space for Learning and Earning',
    tech: ['React', 'MUI', 'Figma', 'JavaScript'],
    image: dxhub,
    live: 'https://dxland1.vercel.app/',
    github: 'https://github.com/Brendanmebson/dxland'
  },
  {
    title: 'PulseBoard',
    desc: 'Team collaboration forum with posts & replies.',
    tech: ['React', 'TypeScript', 'Node', 'MongoDB', 'MUI'],
    image: chatbuddy,
    live: 'https://github.com/Brendanmebson',
    github: 'https://github.com/Brendanmebson'
  },
  {
    title: 'MovieSpot',
    desc: 'A movie recommendation website for New and old releases',
    tech: ['React', 'TypeScript', 'Node', 'MUI'],
    image: moviespot,
    live: 'https://movies-ticketing.vercel.app/',
    github: 'https://github.com/Brendanmebson'
  },

  {
    title: 'BuddySpend',
    desc: 'A simple padi-styled budget tracker for your savings.',
    tech: ['React', 'TypeScript', 'Node', 'MongoDB', 'MUI'],
    image: buddyspend,
    live: 'https://github.com/Brendanmebson',
    github: 'https://github.com/Brendanmebson'
  },
  {
    title: 'Transport Fare Comparison',
    desc: 'Compare ride-hailing fares with ETA & recommended option.',
    tech: ['React Native', 'Expo', 'APIs', 'React Native Maps', 'Vector Icons'],
    image: defaultImage,
    live: 'https://github.com/Brendanmebson',
    github: 'https://github.com/Brendanmebson'
  },
  {
    title: 'PulseBoard',
    desc: 'Team collaboration forum with posts & replies.',
    tech: ['React', 'TypeScript', 'Node', 'MongoDB', 'MUI'],
    image: pulseboard,
    live: 'https://github.com/Brendanmebson',
    github: 'https://github.com/Brendanmebson'
  }
];

export default function Projects(){
  return (
    <>
      <Helmet><title>Projects — Brendan</title></Helmet>
      <Typography variant="h4" sx={{ mb:3, fontWeight:700, color:'white' }}>
        Projects
      </Typography>

      <Box sx={{ display:'flex', gap: 3, flexWrap:'wrap' }}>
        {projects.map(p => (
          <Card 
            key={p.title} 
            className="card-3d"
            sx={{
              width: 320,
              display:'flex',
              flexDirection:'column',
              borderRadius:3,
              background: 'linear-gradient(145deg,rgb(30, 22, 22),rgb(5, 14, 36))',
              color:'white',
              boxShadow:'0 8px 20px rgba(0,0,0,0.6)',
              transition:'all 0.3s ease',
              '&:hover': {
                transform:'translateY(-8px) scale(1.02)',
                boxShadow:'0 12px 30px rgba(0,0,0,0.85)'
              }
            }}
          >
            {/* Project Image */}
            <CardMedia
              component="img"
              height="180"
              image={p.image}
              alt={p.title}
              sx={{
                borderTopLeftRadius:12,
                borderTopRightRadius:12,
                objectFit:'cover',
                filter:'brightness(0.85) contrast(1.1)',
                transition:'filter 0.3s',
                '&:hover': { filter:'brightness(1) contrast(1.2)' }
              }}
            />

            <CardContent sx={{ flexGrow:1 }}>
              <Typography variant="h6" sx={{ fontWeight:600, color:'white' }}>
                {p.title}
              </Typography>
              <Typography sx={{ color:'#aaa', mt:1, fontSize:14 }}>
                {p.desc}
              </Typography>

              {/* Tech stack chips */}
              <Stack direction="row" spacing={1} sx={{ mt:2, flexWrap:'wrap' }}>
                {p.tech.map(t => (
                  <Chip 
                    key={t} 
                    label={t} 
                    variant="outlined" 
                    size="small"
                    sx={{
                      borderColor:'#444',
                      color:'#bbb',
                      fontSize:12
                    }}
                  />
                ))}
              </Stack>

              {/* Links: Live + GitHub */}
              <Stack direction="row" spacing={1} sx={{ mt:2 }}>
                <IconButton 
                  href={p.live} 
                  target="_blank" 
                  rel="noopener" 
                  sx={{ color:'#bbb', '&:hover':{ color:'#4dabf7' } }}
                >
                  <LaunchIcon />
                </IconButton>
                <IconButton 
                  href={p.github} 
                  target="_blank" 
                  rel="noopener" 
                  sx={{ color:'#bbb', '&:hover':{ color:'white' } }}
                >
                  <GitHubIcon />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
