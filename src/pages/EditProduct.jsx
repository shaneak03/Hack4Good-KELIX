import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import { useParams, useLocation } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';

const EditProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');

  useEffect(() => {
    console.log('Product ID:', id);
    const fetchProduct = async () => {
      const { data, error } = await supabase
        .from('Product')
        .select('*')
        .eq('Product_ID', id)
        .single();

      if (error) {
        console.error('Error fetching product:', error);
      } else {
        setProductName(data.Name);
        setProductDescription(data.Description);
        setProductPrice(data.Points);
        setProductQuantity(data.Available);
        setProductImageUrl(data.Image);
      }
    };

    if (product) {
      setProductName(product.name);
      setProductDescription(product.description);
      setProductPrice(product.price ? product.price.replace('$', '') : ''); // Remove the dollar sign if it exists
      setProductQuantity(product.quantity);
      setProductImageUrl(product.image);
    } else {
      fetchProduct();
    }
  }, [id, product]);

  const handleUpdateProduct = async () => {
    // Logic to update the product
    const { error } = await supabase
      .from('Product')
      .update({
        Name: productName,
        Description: productDescription,
        Points: productPrice,
        Available: productQuantity,
        Image: productImageUrl
      })
      .eq('Product_ID', id);

    if (error) {
      console.error('Error updating product:', error);
      alert('Error updating product');
    } else {
      console.log('Product updated:', { productName, productDescription, productPrice, productQuantity, productImageUrl });
      alert('Product updated successfully');
    }
  };

  const handleDeleteProduct = async () => {
    // Logic to delete a product
    const { error } = await supabase
      .from('Product')
      .delete()
      .eq('Product_ID', id);

    if (error) {
      console.error('Error deleting product:', error);
      alert('Error deleting product');
    } else {
      console.log('Product deleted:', { productName, productDescription, productPrice, productQuantity, productImageUrl });
      alert('Product deleted successfully');
    }
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