import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.Image}
        alt={product.Name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.Name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.Description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6" color="primary">
            ${product.Points}
          </Typography>
          <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;