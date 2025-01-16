import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../utils/supabaseClient';
import ProductCardAdmin from '../components/ProductAdminCard'; // Import ProductCard component

const ProductAdminPage = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const handleAddProduct = () => {
    // Navigate to the add product page
    navigate('/product-add');
  };

  const handleEditProduct = (product) => {
    // Navigate to the edit product page with the product ID
    console.log('Navigating to edit product with ID:', product.Product_ID);
    navigate(`/product-edit/${product.Product_ID}`, { state: { product } });
  };

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
            <Grid item key={product.Product_ID} xs={12} sm={6} md={4}>
              <ProductCardAdmin 
                product={{ 
                  name: product.Name, 
                  description: product.Description, 
                  price: `$${product.Points}`, 
                  quantity: product.Available, 
                  image: product.Image 
                }} 
                onEdit={() => handleEditProduct(product)} 
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductAdminPage;