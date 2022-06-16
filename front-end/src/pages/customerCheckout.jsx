import React from 'react';
import { Container, Paper } from '@mui/material';
import NavBar from '../shared/components-pages/NavBar';
import TableCheckout from '../shared/components-pages/TableCheckout';
import TotalPriceCheckout from '../shared/components-pages/TotalPriceCheckout';
import DetailsAndDeliver from '../shared/components-pages/DetailsAndDeliver';

export default function CustomerCheckout() {
  return (
    <>
      <NavBar />
      <Container>
        <Paper sx={ { padding: '2rem' } }>
          <TableCheckout />
          <TotalPriceCheckout />
        </Paper>
        <DetailsAndDeliver />
      </Container>
    </>
  );
}
