import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ProductCard from '../components/ProductCard';
import { supabase } from '../utils/supabaseClient';

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchProducts = async () => {
        const { data, error } = await supabase
          .from('Product')
          .select('*');
  
        if (error) {
          console.error('Error fetching products:', error);
        } else {
          setProducts(data);
        }
      };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      const price = typeof product.Points === 'number' ? product.Points : parseFloat(product.Points);
      return total + (isNaN(price) ? 0 : price);
    }, 0).toFixed(2);
  };

  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Typography variant="h3" gutterBottom align="center">
        Our Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={9} order={{ xs: 1, md: 2 }}>
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.Product_ID}>
                <ProductCard product={product} addToCart={addToCart} />
              </Grid>
            ))}
          </Grid>
        </Grid> 
        <Grid item xs={12} md={3} order={{ xs: 2, md: 1 }}>
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
                <ListItemText primary={item.Name} secondary={`Price: ${item.Points}`} />
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
