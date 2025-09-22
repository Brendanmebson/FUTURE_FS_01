import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';

export default function Navbar(){
  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0} 
      sx={{ 
        backdropFilter: 'blur(6px)', 
        borderBottom: '1px solid rgba(255,255,255,0.03)' 
      }}
    >
      <Toolbar sx={{ display:'flex', justifyContent:'space-between' }}>
        {/* Logo / Name */}
        <Typography 
          variant="h6" 
          component={RouterLink} 
          to="/" 
          sx={{ 
            textDecoration:'none', 
            color:'inherit', 
            fontWeight:700 
          }}
        >
          Brendan.dev
        </Typography>

        {/* Navigation Links */}
        <Box>
        <Button component={RouterLink} to="/" color="inherit">
            Home
          </Button>
          <Button component={RouterLink} to="/projects" color="inherit">
            Projects
          </Button>
          <Button component={RouterLink} to="/contact" color="inherit">
            Contact
          </Button>

          {/* Resume button with outline + download icon */}
          <Button 
            href="/Resume.pdf" 
            target="/" 
            download="Resume.pdf"
            rel="noopener" 
            variant="outlined"
            startIcon={<DownloadIcon />}
            sx={{
              ml: 1,
              borderColor: 'primary.main',
              color: 'primary.main',
              '&:hover': {
                borderColor: 'primary.dark',
                backgroundColor: 'rgba(25, 118, 210, 0.04)', // subtle hover effect
              }
            }}
          >
            Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
