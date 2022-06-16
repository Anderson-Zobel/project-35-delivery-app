import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function TextComponent({ value, text, dataTestId, index }) {
  return (
    <Typography>
      <span>{text}</span>
      <span data-testid={ `customer_orders__element-${dataTestId}-${index}` }>
        {value}
      </span>
    </Typography>
  );
}

TextComponent.propTypes = {
  value: PropTypes.number.isRequired,
  dataTestId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
