import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function ProductCard({ product }) {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardMedia
        component="img"
        height="160"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ maxHeight: 60, overflow: 'hidden' }}>
          {product.description}
        </Typography>
        <Typography variant="subtitle1" color="text.primary" sx={{ mt: 1 }}>
          ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard;