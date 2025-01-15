import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

const AddUser = () => {
  const [name, setName] = useState('');
  const [bankValue, setBankValue] = useState(0);

  const handleSave = () => {
    // Logic to save the new user details
    console.log('New user added:', { name, bankValue });
  };

  const handleDeleteUser = () => {
    // Logic to delete the user
    console.log('Delete user clicked');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Add User
        </Typography>
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Bank Value"
                type="number"
                value={bankValue}
                onChange={(e) => setBankValue(e.target.value)}
                margin="normal"
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} justifyContent="flex-end" sx={{ marginTop: '20px' }}>
            <Grid item>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{ backgroundColor: '#d32f2f' }} onClick={handleDeleteUser}>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AddUser;