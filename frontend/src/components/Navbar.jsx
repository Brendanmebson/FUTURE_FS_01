import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, 
  List, ListItem, ListItemButton, ListItemText 
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme, useMediaQuery } from '@mui/material';

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = (
    <>
      <Button component={RouterLink} to="/" color="inherit">
        Home
      </Button>
      <Button component={RouterLink} to="/projects" color="inherit">
        Projects
      </Button>
      <Button component={RouterLink} to="/contact" color="inherit">
        Contact
      </Button>
      <Button
        href="/Resume.pdf"
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
            backgroundColor: 'rgba(25, 118, 210, 0.04)',
          },
        }}
      >
        Resume
      </Button>
    </>
  );

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

        {/* Desktop Nav */}
        {!isMobile && (
          <Box>
            {navLinks}
          </Box>
        )}

        {/* Mobile Nav (hamburger + drawer) */}
        {isMobile && (
          <>
            <IconButton onClick={toggleDrawer(true)} color="inherit">
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box sx={{ width: 250, p: 2 }}>
                <IconButton onClick={toggleDrawer(false)} sx={{ float: 'right' }}>
                  <CloseIcon />
                </IconButton>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to="/" onClick={toggleDrawer(false)}>
                      <ListItemText primary="Home" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to="/projects" onClick={toggleDrawer(false)}>
                      <ListItemText primary="Projects" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={RouterLink} to="/contact" onClick={toggleDrawer(false)}>
                      <ListItemText primary="Contact" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding sx={{ mt: 1 }}>
                    <Button
                      href="/Resume.pdf"
                      download="Resume.pdf"
                      rel="noopener"
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      fullWidth
                      sx={{
                        borderColor: 'primary.main',
                        color: 'primary.main',
                        '&:hover': {
                          borderColor: 'primary.dark',
                          backgroundColor: 'rgba(25, 118, 210, 0.04)',
                        },
                      }}
                    >
                      Resume
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
