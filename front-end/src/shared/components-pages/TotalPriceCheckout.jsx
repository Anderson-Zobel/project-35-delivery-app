import React, { useContext } from 'react';
import { Container } from '@mui/material';
import Context from '../contexts/Context';

export default function TotalPriceCheckout() {
  const { getTotalAmount } = useContext(Context);
  return (
    <Container
      sx={ {
        backgroundColor: 'green',
        width: '200px',
        height: '50px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        mr: 0,
        mt: 1,
      } }
    >
      <span>Total: R$</span>
      <span data-testid="customer_checkout__element-order-total-price">
        {getTotalAmount()}
      </span>
    </Container>
  );
}
