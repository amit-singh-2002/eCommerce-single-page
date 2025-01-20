"use client"
// import { IconButton } from '@mui/material'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';
import { 
  Box, 
  Paper, 
  Grid, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  CardMedia, 
  IconButton 
} from "@mui/material";
import { Plus as Add, Minus as Remove } from 'lucide-react';
import PrimarySearchAppBar from '../app/components/head';

const products = [
  { id: 1, name: 'Product 1', price: 10, image: 'https://www.gstatic.com/webp/gallery/1.jpg' },
  { id: 2, name: 'Product 2', price: 20, image: 'https://www.gstatic.com/webp/gallery/2.jpg' },
  { id: 3, name: 'Product 3', price: 30, image: 'https://www.gstatic.com/webp/gallery/3.jpg' },
];

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
    }
  };

  return (
    <Box className="flex flex-col w-full min-h-screen">
      {/* Header */}
      <PrimarySearchAppBar />

      {/* Main Content */}
      <Box className="p-4 flex-grow flex">
        <Grid container spacing={3}>
          {/* Left Content Area */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ width: '100%', bg: 'gray.50', p: 4 }}>
              <Typography variant="h6" sx={{ mb: 4 }}>Products</Typography>
              <Grid container spacing={3}>
                {products.map((product) => (
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                      <CardMedia
                        component="img"
                        height="200"
                        image={product.image}
                        alt={product.name}
                      />
                      <CardContent>
                        <Typography variant="h6">{product.name}</Typography>
                        <Typography variant="body2" color="textSecondary">${product.price}</Typography>
                        <Button variant="contained" color="primary" onClick={() => addToCart(product)} sx={{ mt: 2 }}>Add to Cart</Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          
          {/* Right Content Area */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ width: '100%', bg: 'gray.50', p: 4 }}>
              <Typography variant="h6" sx={{ mb: 4, alignItems: 'center' }}><ShoppingCartIcon  />Cart</Typography>
              
              {cart.length === 0 ? (
                <Typography>No items in cart</Typography>
              ) : (
                cart.map((item, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Typography variant="body1">{item.name}</Typography>
                    <Typography variant="body2" color="textSecondary">${item.price}</Typography>
                    <Box display="flex" alignItems="center" justifyContent="center">
                      <IconButton onClick={() => removeFromCart(item)}>
                        <Remove />
                      </IconButton>
                      <Typography>{item.quantity}</Typography>
                      <IconButton onClick={() => addToCart(item)}>
                        <Add />
                      </IconButton>
                    </Box>
                  </Box>
                ))
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;