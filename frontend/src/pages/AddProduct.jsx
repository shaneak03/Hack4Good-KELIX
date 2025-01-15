import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const handleAddProduct = () => {
    // Logic to add a new product
    console.log('Product added:', { productName, productDescription, productPrice });
  };

  const handleDeleteProduct = () => {
    // Logic to delete a product
    console.log('Product deleted:', { productName, productDescription, productPrice });
  };

  const handleAttachImage = () => {
    // Logic to attach an image
    console.log('Image attached');
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
          <Grid item xs={12} sm={8} container justifyContent="flex-end" spacing={2}>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" onClick={handleAttachImage} fullWidth>
                Attach Image
              </Button>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" color="primary" onClick={handleAddProduct} fullWidth>
                Save
              </Button>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" sx={{ backgroundColor: '#d32f2f' }} onClick={handleDeleteProduct} fullWidth>
                Delete
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AddProduct;