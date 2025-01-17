import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'XBox Series X', description: 'This is a Xbox', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPYuac6SrrIXGn1l2rDdF5MEU3zkeOneDDmg&s' },
  { id: 2, name: 'PlayStation 5', description: 'This is a PS5', image: 'https://gmedia.playstation.com/is/image/SIEPDC/ps5-pro-dualsense-image-block-01-en-16aug24' },
  { id: 3, name: 'Nintendo Switch', description: 'This is a Switch', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWihqQzdNRnTcov2Hvv095CvpCqKRm47prshZ-XgC22OucNo2OhQvhEnAu5CGoaQkWggnECk9Dd7gMMIOwIOCjVLoCvAV53ZBquqLAg' },
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
                  height="250"
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