import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  Paper } from '@mui/material';
import NavBar from '../shared/components/navBar';
import Context from '../shared/contexts/Context';
import TableComponent from '../shared/components/tableComponent';

export default function CustomerCheckout() {
  const { getTotalAmount } = useContext(Context);
  const navigate = useNavigate();

  function handleClick() {
    navigate('../customer/orders/:id', { replace: true });
  }

  return (
    <>
      <NavBar />
      <Container
        container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={ { minHeight: '100vh', marginTop: '2rem' } }
      >
        <Paper
          sx={ {
            // marginTop: '2rem',
            padding: '2rem',
            mr: 2 } }
        >
          <TableComponent />
          <Container
            sx={ {
              backgroundColor: 'green',
              width: '200px',
              height: '50px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'right',
              // flexDirection: 'column',
              // alignContent: 'center',
              alignItems: 'center',
              color: 'white',
              mr: 0,
              mt: 1,
            } }
          >
            <span>Total: R$</span>
            <span
              data-testid="customer_checkout__element-order-total-price"
            >
              {getTotalAmount()}
            </span>
          </Container>
        </Paper>
        <Paper sx={ { padding: '2rem', mr: 2, mt: 2 } }>
          <Button
            data-testid="customer_checkout__button-submit-order"
            onClick={ () => handleClick() }
          >
            Finalizar Pedido
          </Button>
        </Paper>
      </Container>
    </>
  );
}
