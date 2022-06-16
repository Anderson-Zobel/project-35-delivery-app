import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import PropTypes from 'prop-types';
import moment from 'moment';
import TextComponent from './TextComponent';

export default function OrderCard({ order, index }) {
  return (
    <Link
      href={ `/customer/orders/${order.id}` }
      color="inherit"
      underline="none"
      data-testid="customer_products__element-navbar-link-products"
    >
      <Box key={ index } sx={ { maxWidth: 500 } }>
        <Card>
          <CardContent>
            <TextComponent
              value={ order.id }
              text="Pedido:"
              dataTestId="order-id"
              index={ order.id }
            />
            <TextComponent
              value={ order.status }
              text="Status:"
              dataTestId="delivery-status"
              index={ order.id }
            />
            <Typography
              data-testid={ `customer_orders__element-order-date-${order.id}` }
            >
              {moment(order.saleDate).format('DD/MM/YYYY')}

            </Typography>
            <TextComponent
              value={ order.totalPrice.replace('.', ',') }
              text="Valor Total: R$ "
              dataTestId="card-price"
              index={ order.id }
            />

          </CardContent>
        </Card>
      </Box>

    </Link>

  );
}

OrderCard.propTypes = {
  order: PropTypes.objectOf({
    id: PropTypes.string,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
