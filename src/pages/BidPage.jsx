import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BidPage = ({ product = { name: 'Product 1', currentBid: 100 } }) => {
  const [bidAmount, setBidAmount] = useState('');
  const navigate = useNavigate();

  const handleBid = () => {
    // Logic to handle placing a bid
    console.log('Bid placed:', bidAmount);
  };

  const handleReturn = () => {
    // Logic to handle returning to the previous page
    navigate(-1);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ padding: '20px', maxWidth: '600px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Bid on {product.name}
        </Typography>
        <Paper sx={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6">Current Bid: ${product.currentBid}</Typography>
          <TextField
            sx={{ maxWidth: '300px' }}
            label="Your Bid Amount"
            type="number"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            margin="normal"
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleBid} sx={{ marginRight: '10px' }}>
              Place Bid
            </Button>
            <Button variant="contained" color="secondary" onClick={handleReturn}>
              Return
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default BidPage;