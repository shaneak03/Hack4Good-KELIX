import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Import NavBar component

const EditProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  const [productName, setProductName] = useState(product ? product.name : '');
  const [productDescription, setProductDescription] = useState(product ? product.description : '');
  const [productPrice, setProductPrice] = useState(product ? product.price : '');

  useEffect(() => {
    if (!product) {
      // Fetch the product details by ID if not provided as a parameter
      fetch(`/api/products/${id}`)
        .then(response => response.json())
        .then(data => {
          setProductName(data.name);
          setProductDescription(data.description);
          setProductPrice(data.price);
        })
        .catch(error => {
          console.error('There was an error fetching the product!', error);
        });
    }
  }, [id, product]);

  const handleUpdateProduct = () => {
    // Logic to update the product
    console.log('Product updated:', { productName, productDescription, productPrice });
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
      <NavBar logo="https://via.placeholder.com/40" navItems={['Home', 'Products', 'Tasks']} bankValue={300} />
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