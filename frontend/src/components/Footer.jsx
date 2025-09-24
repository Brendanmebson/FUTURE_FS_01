import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer(){
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: { xs: 2, sm: 3, md: 4 }, // smaller padding on mobile
        px: { xs: 2, sm: 4 },
        textAlign: 'center', 
        borderTop: '1px solid rgba(255,255,255,0.08)',
        background: 'transparent'
      }}
    >
      <Typography 
        variant="body2" 
        sx={{ 
          fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' }, // smaller font on mobile
          color: 'rgba(255,255,255,0.7)', 
          lineHeight: 1.6 
        }}
      >
        © {new Date().getFullYear()} Mebuge Kamsiyochukwu Brendan — Built with React, MUI & ❤️
      </Typography>
    </Box>
  );
}
