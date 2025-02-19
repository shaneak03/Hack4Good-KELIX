import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';

const ProductCardAdmin = ({ product, onEdit }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Typography variant="h6" color="primary">
            {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Quantity: {product.quantity}
          </Typography>
          <Button variant="contained" color="primary" onClick={onEdit}>
            Edit
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCardAdmin;