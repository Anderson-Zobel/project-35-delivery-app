import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import PropTypes from 'prop-types';
import moment from 'moment';
import TextComponent from './TextComponent';

export default function OrderCard({ order, index, user }) {
  return (
    <Link
      href={ `/${user}/orders/${order.id}` }
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
              user={ user }
            />
            <TextComponent
              value={ order.status }
              text="Status:"
              dataTestId="delivery-status"
              index={ order.id }
              user={ user }
            />
            <Typography
              data-testid={ `${user}_orders__element-order-date-${order.id}` }
            >
              {moment(order.saleDate).format('DD/MM/YYYY')}
            </Typography>
            <TextComponent
              value={ order.totalPrice.replace('.', ',') }
              text="Valor Total: R$ "
              dataTestId="card-price"
              index={ order.id }
              user={ user }
            />
            {user === 'seller' ? (
              <Typography
                data-testid={ `seller_orders__element-card-address-${order.id}` }
              >
                {order.deliveryAddress + order.deliveryNumber}
              </Typography>
            ) : null}
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
  user: PropTypes.string.isRequired,
};
