import React, { useState } from 'react';
import { Grid, Typography, Box, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductCard from '../components/ProductCard';

// Sample product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a description for product 1.',
    price: '$50',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is a description for product 2.',
    price: '$30',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'This is a description for product 3.',
    price: '$70',
    image: 'https://via.placeholder.com/200',
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is a description for product 4.',
    price: '$90',
    image: 'https://via.placeholder.com/200',
  },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + parseFloat(product.price.slice(1)), 0).toFixed(2);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Typography variant="h3" gutterBottom align="center">
        Our Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductCard product={product} addToCart={addToCart} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom>
            Cart
          </Typography>
          <List>
            {cart.map((item, index) => (
              <ListItem key={index} secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(index)}>
                  <DeleteIcon />
                </IconButton>
              }>
                <ListItemText primary={item.name} secondary={`Price: ${item.price}`} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Typography variant="h6" gutterTop>
            Total: ${calculateTotal()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductPage;
