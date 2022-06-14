import React from 'react';
import { Container, Paper } from '@mui/material';
import NavBar from '../shared/components/NavBar';
import TableCheckout from '../shared/components/TableCheckout';
import TotalPriceCheckout from '../shared/components/TotalPriceCheckout';
import DetailsAndDeliver from '../shared/components/DetailsAndDeliver';

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
