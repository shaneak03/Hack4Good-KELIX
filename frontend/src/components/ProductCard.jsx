import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const ProductCard = ({ product, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image || 'https://via.placeholder.com/200'} // Add dummy value
        alt={product.name || 'Product Name'} // Add dummy value
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name || 'Product Name'} // Add dummy value
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description || 'This is a description for the product.'} // Add dummy value
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6" color="primary">
            {product.points || '0'} Points // Add dummy value
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