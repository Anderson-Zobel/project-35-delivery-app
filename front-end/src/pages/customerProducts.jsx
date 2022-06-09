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
      <Button
        sx={ { pr: 0.1, pb: 0.1 } }
        data-testid="customer_products__checkout-bottom-value"
      >
        Ver Carrinho: R$
      </Button>
    </>
  );
}
