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
            <TextComponent id={ order.id } dataTestId="order-id" index={ index } />
            <TextComponent
              id={ order.status }
              dataTestId="delivery-status"
              index={ index }
            />
            <Typography
              data-testid={ `customer_orders__element-order-date-${index}` }
            >
              {moment(order.saleDate).format('DD/MM/YYYY')}

            </Typography>
            <TextComponent
              id={ order.totalPrice }
              dataTestId="card-price"
              index={ index }
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
