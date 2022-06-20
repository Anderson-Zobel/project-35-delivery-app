import React, { useContext, useEffect } from 'react';
import {
  Container,
  Paper,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import NavBar from '../shared/components/NavBar';
import TableOrder from '../shared/components/order/TableOrder';
import Context from '../shared/contexts/Context';
import { getOrderById } from '../shared/services/api';

export default function OrderById() {
  const { setOrder, setDeliveryStatus } = useContext(Context);

  const { id } = useParams();

  useEffect(() => {
    async function fetchAPI() {
      const response = await getOrderById(id);
      setOrder(response);
      setDeliveryStatus(response.status);
    }
    fetchAPI();
  }, [id, setOrder, setDeliveryStatus]);

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
