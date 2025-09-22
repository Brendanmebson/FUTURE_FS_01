import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Footer(){
  return (
    <Box component="footer" sx={{ py:4, textAlign:'center', borderTop:'1px solid rgba(255,255,255,0.03)' }}>
      <Typography variant="body2">© {new Date().getFullYear()} Mebuge Kamsiyochukwu Brendan — Built with React, MUI & ❤️</Typography>
    </Box>
  );
}
