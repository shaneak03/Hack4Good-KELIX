import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of Product 1', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', description: 'Description of Product 2', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', description: 'Description of Product 3', image: 'https://via.placeholder.com/150' },
];

const AuctionPage = () => {
  const navigate = useNavigate();

  const handleBid = (product) => {
    // Logic to handle bidding on a product
    console.log('Bid placed on:', product);
    navigate('/bid');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom align="center" sx={{ fontSize: '2.5rem' }}>
          Auction Page
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box>
                    <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: '1.5rem' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem' }}>
                      {product.description}
                    </Typography>
                  </Box>
                  <Button variant="contained" color="primary" onClick={() => handleBid(product)}>
                    Bid
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AuctionPage;