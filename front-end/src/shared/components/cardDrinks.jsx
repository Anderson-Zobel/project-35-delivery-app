import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  CardMedia,
  CardHeader,
  CardContent,
  Typography,
  ButtonGroup,
  TextField,
} from '@mui/material';

export default function CardDrinks({ product }) {
  const { id, name, urlImage, price } = product;
  const [count, setCount] = useState(0);

  function incrementCount() {
    const countHandler = count + 1;
    setCount(countHandler);
  }
  function decrementCount() {
    const countHandler = count - 1;
    setCount(countHandler);
  }

  function handleChange({ target }) {
    setCount(+target.value);
  }

  return (
    <Card variant="outlined" sx={ { width: 345, display: 'inline-block', m: '1rem' } }>
      <CardHeader
        title={ name }
        sx={ { textAlign: 'center' } }
        data-testid={ `customer_products__element-card-title-${id}` }
      />

      <CardMedia
        component="img"
        height="194"
        image={ urlImage }
        alt="Cervejinha"
        sx={ { objectFit: 'scale-down' } }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <CardContent>
        <Typography
          variant="h6"
          sx={ { textAlign: 'center' } }
          data-testid={ `customer_products__element-card-price-${id}` }
        >
          { price.replace('.', ',') }
        </Typography>
        <ButtonGroup sx={ { display: 'flex', justifyContent: 'center' } }>
          <Button
            data-testid={ `customer_products__button-card-rm-item-${id}` }
            onClick={ () => decrementCount() }
          >
            -
          </Button>
          <TextField
            sx={ { width: 50 } }
            value={ count }
            inputProps={ {
              onChange: handleChange,
              'data-testid': `customer_products__input-card-quantity-${id}`,
            } }
          />
          <Button
            data-testid={ `customer_products__button-card-add-item-${id}` }
            onClick={ () => incrementCount() }
          >
            +
          </Button>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

CardDrinks.propTypes = {
  product: PropTypes.objectOf({
    product: PropTypes.objectOf({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      urlImage: PropTypes.string,
    }),
  }).isRequired,
};
