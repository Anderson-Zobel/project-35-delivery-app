import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function TextComponent({ id, dataTestId, index }) {
  return (
    <Typography>
      <span>Pedido:</span>
      <span data-testid={ `customer_orders__element-${dataTestId}-${index}` }>
        {id}
      </span>
    </Typography>
  );
}

TextComponent.propTypes = {
  id: PropTypes.number.isRequired,
  dataTestId: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
