import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Button, TableHead, TableRow, TableCell } from '@mui/material';
import moment from 'moment';
import { setOrderStatusById } from '../../services/api';
import Context from '../../contexts/Context';

export default function TableHeadContent() {
  const { order, deliveryStatus, setDeliveryStatus } = useContext(Context);

  const [prepare, setPrepare] = useState(true);
  const [deliver, setDeliver] = useState(true);
  const [delivered, setDelivered] = useState(true);

  const { id } = useParams();

  const handleClick = async ({ target }) => {
    const status = target.value;
    const response = await setOrderStatusById(id, status);
    setDeliveryStatus(response.sale.status);
  };

  useEffect(() => {
    async function fetchAPI() {
      if (deliveryStatus === 'Pendente') {
        setPrepare(false);
        setDeliver(true);
      }
      if (deliveryStatus === 'Preparando') {
        setDeliver(false);
        setPrepare(true);
      }
      if (deliveryStatus === 'Em Trânsito') {
        setDelivered(false);
        setPrepare(true);
        setDeliver(true);
      }
      if (deliveryStatus === 'Entregue') {
        setDeliver(true);
        setDelivered(true);
        setPrepare(true);
      }
    }
    fetchAPI();
  }, [deliveryStatus]);

  const { role } = JSON.parse(localStorage.getItem('user'));

  const testId = `${role}_order_details__element-order-`;

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
        { role === 'customer' ? (
          <Button
            data-testid="customer_order_details__button-delivery-check"
            disabled={ delivered }
            value="Entregue"
            onClick={ (e) => handleClick(e) }
          >
            Marcar como entregue
          </Button>
        ) : null}
        {role === 'seller' ? (
          <>
            <Button
              data-testid="seller_order_details__button-preparing-check"
              onClick={ (e) => handleClick(e) }
              value="Preparando"
              disabled={ prepare }
            >
              PREPARAR PEDIDO
            </Button>
            <Button
              data-testid="seller_order_details__button-dispatch-check"
              onClick={ (e) => handleClick(e) }
              value="Em Trânsito"
              disabled={ deliver }
            >
              SAIU PARA ENTREGA
            </Button>
          </>
        ) : null}
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
