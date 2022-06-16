import React, { useContext, useEffect } from 'react';
import {
  Container,
  Paper,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import NavBar from '../shared/components-pages/NavBar';
import TableOrder from '../shared/components-pages/order/TableOrder';
import Context from '../shared/contexts/Context';
import { getOrderById } from '../shared/services/api';

export default function OrderById() {
  const { setOrder } = useContext(Context);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function fetchAPI() {
      const response = await getOrderById(+id);
      setOrder(response);
      console.log(response);
    }
    fetchAPI();
  }, [id]);

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
