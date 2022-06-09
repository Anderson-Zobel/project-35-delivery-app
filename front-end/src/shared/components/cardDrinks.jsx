import React from 'react';
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
  console.log(product);
  const { name, id, urlImage, price } = product;
  console.log(name);
  return (
    <Card variant="outlined" sx={ { maxWidth: 345, display: 'inline-block', m: "1rem" } }>
      <CardHeader
        title= { name }
      />
      
      <CardMedia
        component="img"
        height="194"
        image={ urlImage }
        alt="Cervejinha"
        sx= { { objectFit: 'scale-down' } }
      />
      <CardContent>
        <Typography>{ price }</Typography>
        <ButtonGroup>
          <Button>-</Button>
          <TextField width="50"/>
          <Button>+</Button>
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
