import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

export default function TextComponent({ value, text, dataTestId, index, user }) {
  return (
    <Typography>
      <span>{text}</span>
      <span data-testid={ `${user}_orders__element-${dataTestId}-${index}` }>
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
  user: PropTypes.string.isRequired,
};
