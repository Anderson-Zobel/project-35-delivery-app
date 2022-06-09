import React, { useEffect, useState } from 'react';
import NavBar from '../shared/components/navBar';
import { getProducts } from '../shared/services/api';
// import CardDrinks from '../shared/components/cardDrinks';

export default function CustomerProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await getProducts();
      setProducts(response);
    }
    fetchAPI();
  }, []);
  console.log(products, 'estado');
  return (
    <NavBar />
    // <Container>
    //   <p>botao  - botao pedido - Usuario - Botao Logout</p>
    //   <CardDrinks/>
    // </Container>
  );
}
