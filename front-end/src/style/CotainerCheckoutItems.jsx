import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@mui/material';

export default function ContainerCheckoutItems({ children }) {
  return (
    <Container
      sx={ {
        backgroundColor: 'green',
        width: '200px',
        height: '50px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        mr: 0,
        mt: 1,
      } }
    >
      {children}
    </Container>
  );
}

ContainerCheckoutItems.propTypes = {
  children: PropTypes.element.isRequired,
};
