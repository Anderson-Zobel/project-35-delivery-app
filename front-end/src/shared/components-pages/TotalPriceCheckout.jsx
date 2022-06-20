import React, { useContext } from 'react';
import { Container } from '@mui/material';
import Context from '../contexts/Context';

export default function TotalPriceCheckout() {
  const { getTotalAmount } = useContext(Context);
  return (
    <Container
      sx={ {
        backgroundColor: '#1976d2',
        width: '200px',
        height: '50px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        borderRadius: '5px',
        fontWeight: 500,
        fontSize: '0.9375rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
        padding: '8px 22px',
        cursor: 'pointer',
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
