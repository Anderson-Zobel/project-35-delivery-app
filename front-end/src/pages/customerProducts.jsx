import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import NavBar from '../shared/components/navBar';
import CardDrinks from '../shared/components/cardDrinks';
import { getProducts } from '../shared/services/api';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchAPI() {
      const response = await getProducts();
      setProducts(response);
    }
    fetchAPI();
  }, []);
  return (
    <>
      <NavBar />
      {products.map((product, index) => <CardDrinks product={ product } key={ index } />)}
      <Button>
        Ver Carrinho: R$
      </Button>
    </>
  );
}
