import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  const [productName, setProductName] = useState(product ? product.name : '');
  const [productDescription, setProductDescription] = useState(product ? product.description : '');
  const [productPrice, setProductPrice] = useState(product ? product.price : '');
  const [productQuantity, setProductQuantity] = useState(product ? product.quantity : '');
  const [productImageUrl, setProductImageUrl] = useState(product ? product.image : '');

  useEffect(() => {
    if (!product) {
      // Fetch the product details by ID if not provided as a parameter
      fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
          setProductName(data.name);
          setProductDescription(data.description);
          setProductPrice(data.price);
          setProductQuantity(data.quantity);
          setProductImageUrl(data.image);
        })
        .catch(error => {
          console.error('There was an error fetching the product!', error);
        });
    }
  }, [id, product]);

  const handleUpdateProduct = () => {
    // Logic to update the product
    console.log('Product updated:', { productName, productDescription, productPrice, productQuantity, productImageUrl });
  };

  const handleDeleteProduct = () => {
    // Logic to delete a product
    console.log('Product deleted:', { productName, productDescription, productPrice, productQuantity, productImageUrl });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom align="center">
          Edit Product
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
              <Button variant="contained" color="primary" onClick={handleUpdateProduct} fullWidth>
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

export default EditProduct;