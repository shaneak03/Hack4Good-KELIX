import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate and useLocation

const EditUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || { user: { id: '', name: '', bankValue: 0 } }; // Get user from location state

  const [name, setName] = useState(user.name);
  const [bankValue, setBankValue] = useState(user.bankValue);

  const handleSave = () => {
    // Logic to save the updated user details
    console.log('User details saved:', { id: user.id, name, bankValue });
    navigate('/users'); // Navigate back to users page after saving
  };

  const handleResetPassword = () => {
    // Logic to reset the user's password
    console.log('Reset password clicked');
  };

  const handleDeleteUser = () => {
    // Logic to delete the user
    console.log('Delete user clicked');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Edit User
        </Typography>
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <Typography variant="body1">Current Name: {user.name}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="New Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Current Bank Value: {user.bankValue}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="New Bank Value"
                type="number"
                value={bankValue}
                onChange={(e) => setBankValue(e.target.value)}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="center" sx={{ marginTop: '20px' }}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" onClick={handleResetPassword}>
                Reset Password
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ backgroundColor: '#d32f2f' }} onClick={handleDeleteUser}>
                Delete User
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default EditUser;