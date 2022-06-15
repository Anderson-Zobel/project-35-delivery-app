import React from 'react';
import {
  Container,
  Paper,
} from '@mui/material';
import NavBar from '../shared/components/NavBar';
import TableOrder from '../shared/components/TableOrder';

export default function OrderById() {
  return (
    <>
      <NavBar />
      <Container>
        <Paper sx={ { padding: '2rem' } }>
          <TableOrder />
        </Paper>
      </Container>
    </>
  );
}
