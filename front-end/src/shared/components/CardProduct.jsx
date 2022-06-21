import React, { useState, useContext, useEffect } from 'react';
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
import Context from '../contexts/Context';

export default function CardProduct({ product }) {
  const { addProductCart, removeProductCart, setDisableCartButton } = useContext(Context);
  const { id, name, urlImage, price } = product;
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function setInitialCount() {
      const shopCart = JSON.parse(localStorage.getItem('carrinho'));
      if (shopCart !== null) {
        shopCart.map((p) => ((id === p.id) ? setCount(p.count) : null));
        setDisableCartButton(false);
      }
    }
    setInitialCount();
  }, [id, setDisableCartButton]);

  function incrementCount() {
    const countHandler = count + 1;
    setCount(countHandler);
    addProductCart(id, name, countHandler, price);
  }

  function decrementCount() {
    const countHandler = count - 1;
    setCount(countHandler);
    if (count <= 0) {
      setCount(0);
    }
    removeProductCart(id, countHandler);
  }

  function handleChange({ target }) {
    const value = target.value.replace(/\D/g, '0');
    if (typeof value === 'string') {
      setCount(+value);
    }
    if (+value === 0) {
      removeProductCart(id, +value);
    }
    if (+value >= 1) {
      setCount(+value);
      addProductCart(id, name, +value, price);
    }
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
              type: 'tel',
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

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};
