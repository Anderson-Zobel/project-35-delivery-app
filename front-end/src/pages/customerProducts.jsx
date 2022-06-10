import React, { useEffect, useState } from 'react';
import { Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavBar from '../shared/components/navBar';
import CardDrinks from '../shared/components/cardDrinks';
import { getProducts } from '../shared/services/api';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

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
      <Fab
        variant="extended"
        // sx={ { pr: 0.1, pb: 0.1, position: 'fixed' } }
        style={ style }
        data-testid="customer_products__checkout-bottom-value"
      >
        <ShoppingCartIcon />
        Ver Carrinho: R$
      </Fab>

    </>
  );
}
