import React from 'react';
import { Box, Button, Typography, Grid, TextField } from '@mui/material';
import ProductCardAdmin from '../components/ProductAdminCard';// Import ProductCard component

const ProductAdminPage = () => {
  const handleAddProduct = () => {
    // Logic to add a new product
    console.log('Add product clicked');
  };

  const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description for product 2', price: 200 },
    // Add more products as needed
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ padding: '20px' }}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h3" gutterBottom align="center">
              Our Products
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" alignItems="center" sx={{ marginBottom: '20px' }}>
          <Grid item xs={12} sm={8} md={6}>
            <TextField fullWidth label="Search Products" variant="outlined" />
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-start" alignItems="center" sx={{ marginBottom: '20px' }}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleAddProduct}>
              Add Product
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ marginTop: '20px' }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCardAdmin product={{ ...product, price: `$${product.price}` }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductAdminPage;