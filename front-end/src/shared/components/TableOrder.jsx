import React, { useState, useEffect } from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableContainer,
  TableBody,
  Typography,
  Button,
  Container,
} from '@mui/material';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { getOrderById, setOrderStatusById } from '../services/api';
import TableTitles from './TableTitles';

const testId = 'customer_order_details__element-order-';

export default function TableOrder() {
  const [order, setOrder] = useState();
  const [deliveryStatus, setDeliveryStatus] = useState('pendente');
  const { id } = useParams();

  useEffect(() => {
    async function fetchAPI() {
      const response = await getOrderById(id);
      setOrder(response);
    }
    fetchAPI();
  }, [id]);

  const handleClick = async () => {
    const response = await setOrderStatusById(id);
    setDeliveryStatus(response);
  };

  return (
    <Container>
      <TableContainer>
        <Table sx={ { minWidth: 650 } } size="small" aria-label="a dense table">
          <TableHead>
            {order ? (
              <Typography>
                Pedido:
                <span data-testid={ `${testId}details-label-order-id` }>
                  {order.id}
                </span>
                P.Vendedora:
                <span data-testid={ `${testId}details-label-seller-name` }>
                  {order.seller.name}
                </span>
                <span data-testid={ `${testId}label-order-date` }>
                  {moment(order.saleDate).format('DD/MM/YYYY')}
                </span>
                <span data-testid={ `${testId}label-delivery-status` }>
                  {deliveryStatus}
                </span>
                <Button
                  data-testid="customer_order_details__button-delivery-check"
                  onClick={ () => handleClick() }
                >
                  Marcar como entregue
                </Button>
              </Typography>) : null}

            <TableTitles />

          </TableHead>
          <TableBody>
            {order ? (order.products.map((item, index) => (
              <TableRow
                key={ item.name }
                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
              >
                <TableCell
                  align="right"
                  data-testid={ `${testId}table-item-number-${index}` }
                >
                  {index + 1}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  data-testid={ `${testId}table-name-${index}` }
                >
                  {item.name}
                </TableCell>
                <TableCell
                  align="right"
                  data-testid={ `${testId}table-quantity-${index}` }
                >
                  {item.SaleProduct.quantity}
                </TableCell>
                <TableCell
                  align="right"
                  data-testid={ `${testId}table-unit-price-${index}` }
                >
                  {item.price.replace('.', ',')}
                </TableCell>
                <TableCell
                  align="right"
                  data-testid={ `${testId}table-sub-total-${index}` }
                >
                  {(item.SaleProduct.quantity * item.price).toFixed(2).replace('.', ',')}
                </TableCell>
              </TableRow>
            ))) : null}
          </TableBody>
        </Table>
      </TableContainer>
      <Container>{order ? (order.totalPrice) : null}</Container>
    </Container>
  );
}
