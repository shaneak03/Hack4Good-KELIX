import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ navItems, bankValue, onLogout }) => { // Remove logo prop
  const [navAnchorEl, setNavAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleNavMenuOpen = (event) => {
    setNavAnchorEl(event.currentTarget);
  };

  const handleNavMenuClose = () => {
    setNavAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  const handleLogout = () => {
    handleProfileMenuClose();
    onLogout();
    navigate('/login');
  };

  const handleNavItemClick = (path) => {
    navigate(path);
  };

  const handleProfileClick = () => {
    handleProfileMenuClose();
    navigate('/profile');
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* Logo on the left */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <ShoppingCartIcon 
            style={{ height: '40px', width: '40px', marginRight: '15px', cursor: 'pointer' }} 
            onClick={() => navigate('/')} 
          />
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleNavMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={navAnchorEl}
                open={Boolean(navAnchorEl)}
                onClose={handleNavMenuClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {navItems && navItems.map((item, index) => (
                  <MenuItem key={index} onClick={() => { handleNavItemClick(item.path); handleNavMenuClose(); }}>
                    {item.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems && navItems.map((item, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ margin: '0 15px', cursor: 'pointer' }}
                  onClick={() => handleNavItemClick(item.path)}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          )}
        </Box>

        {/* Profile Section */}
        <IconButton onClick={handleProfileMenuOpen}>
          <Avatar />
        </IconButton>
        <Menu
          anchorEl={profileAnchorEl}
          open={Boolean(profileAnchorEl)}
          onClose={handleProfileMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem disabled>Bank: ${bankValue}</MenuItem>
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;