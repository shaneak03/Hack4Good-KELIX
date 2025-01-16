import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = async () => {
    if (!productName || !productPrice) {
      alert('Product name and price are required');
      return;
    }

    // Insert the new product into the Supabase database
    const { data, error } = await supabase
      .from('Product')
      .insert([
        { Name: productName, Description: productDescription, Points: productPrice, Available: productQuantity, Image: productImageUrl }
      ]);

    if (error) {
      console.error('Error adding product:', error);
      alert('Error adding product');
    } else {
      console.log('Product added:', data);
      // Navigate to the product admin page after adding the product
      navigate('/product-admin');
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Add Product
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Product Name"
              variant="outlined"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Product Price"
              variant="outlined"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Product Quantity"
              variant="outlined"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Product Description"
              variant="outlined"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              fullWidth
              label="Product Image URL"
              variant="outlined"
              value={productImageUrl}
              onChange={(e) => setProductImageUrl(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={8} container justifyContent="flex-end" spacing={2}>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" color="primary" onClick={handleAddProduct} fullWidth>
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddProduct;