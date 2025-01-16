import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';
import bcrypt from 'bcryptjs';
import { supabase } from '../utils/supabaseClient'; 

const AddUser = () => {
  const [name, setName] = useState('');
  const [bankValue, setBankValue] = useState(0);
  const navigate = useNavigate();

   const handleSave = async () => {
    // Logic to save the new user details
    const hashedPassword = await bcrypt.hash("password", 10);
    console.log('New user added:', name);
    
    const { data, error } = await supabase
      .from('Personnel')
      .insert([{ User_Name: name, Password: hashedPassword, Admin: false, Points: bankValue }]);
  
      navigate('/users');
    };

  const handleReturn = () => {
    navigate('/users');
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
              <Button variant="contained" sx={{ backgroundColor: '#d32f2f' }} onClick={handleReturn}>
                Return
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default AddUser;