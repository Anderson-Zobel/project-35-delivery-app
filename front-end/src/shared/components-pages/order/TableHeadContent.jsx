import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, TableHead, TableRow, TableCell } from '@mui/material';
import moment from 'moment';
import { setOrderStatusById } from '../../services/api';
import Context from '../../contexts/Context';

export default function TableHeadContent() {
  const { order, deliveryStatus, setDeliveryStatus } = useContext(Context);

  const { id } = useParams();

  const handleClick = async () => {
    const response = await setOrderStatusById(id);
    setDeliveryStatus(response.sale.status);
  };
  const testId = 'customer_order_details__element-order-';

  return (
    <TableHead>
      <Typography>
        Pedido:
        <span data-testid={ `${testId}details-label-order-id` }>
          {order.id}
        </span>
        P.Vendedora:
        <span data-testid={ `${testId}details-label-seller-name` }>
          {order.seller.name}
        </span>
        <span data-testid={ `${testId}details-label-order-date` }>
          {moment(order.saleDate).format('DD/MM/YYYY')}
        </span>
        <span data-testid={ `${testId}details-label-delivery-status` }>
          {deliveryStatus}
        </span>
        <Button
          data-testid="customer_order_details__button-delivery-check"
          disabled
          onClick={ () => handleClick() }
        >
          Marcar como entregue
        </Button>
      </Typography>
      <TableRow>
        <TableCell>Item</TableCell>
        <TableCell align="right">Descrição</TableCell>
        <TableCell align="right">Quantidade</TableCell>
        <TableCell align="right">Valor Unitário</TableCell>
        <TableCell align="right">Sub-total</TableCell>
      </TableRow>
    </TableHead>
  );
}
