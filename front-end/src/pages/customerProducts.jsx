import React, { useContext, useEffect } from 'react';
import { Fab } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
import Context from '../shared/contexts/Context';
import NavBar from '../shared/components/NavBar';
import CardDrinks from '../shared/components/CardDrinks';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

export default function CustomerProducts() {
  const { disableCartButton, products, getTotalAmount } = useContext(Context);
  const navigate = useNavigate();

  const user = localStorage.getItem('user');
  let role = '';

  if (user) {
    role = JSON.parse(user).role;
  }

  useEffect(() => {
    if (role === 'seller') {
      navigate('../seller/orders');
    }
  }, [role, navigate]);

  function handleClick() {
    navigate('../customer/checkout', { replace: true });
  }

  return (
    <>
      <NavBar />
      {products.map((product, index) => (
        <CardDrinks product={ product } key={ index } />
      ))}
      <Fab
        variant="extended"
        style={ style }
        data-testid="customer_products__button-cart"
        onClick={ () => handleClick() }
        disabled={ disableCartButton }
      >
        <ShoppingCartIcon />
        <span>
          Ver carrinho R$:
        </span>
        <span data-testid="customer_products__checkout-bottom-value">
          {getTotalAmount()}
        </span>
      </Fab>
    </>
  );
}
