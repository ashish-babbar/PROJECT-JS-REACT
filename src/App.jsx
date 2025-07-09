import React, { useEffect, useState } from 'react';
import './App.css';
import { Grid, Container, CircularProgress, Pagination } from '@mui/material';
import NavBar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchData = async () => {
      const skip = (page - 1) * limit;
      const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      const data = await res.json();
      setProducts(data.products);
      setTotal(data.total);
    };

    fetchData();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <>
      <NavBar />
      <Container sx={{ mt: 4 }}>
        {products.length === 0 ? (
          <CircularProgress />
        ) : (
          <>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
            <Pagination
              count={Math.ceil(total / limit)}
              page={page}
              onChange={handleChange}
              color="primary"
              sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}
            />
          </>
        )}
      </Container>
    </>
  );
}

export default App;