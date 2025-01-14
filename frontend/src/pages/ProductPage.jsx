import React from 'react';
import {Grid, Typography, Box } from '@mui/material';
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
  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      <Typography variant="h3" gutterBottom align="center">
        Our Products
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductPage;
