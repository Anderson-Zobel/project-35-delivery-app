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
  const { name, id } = product;
  console.log(id);
  return (
    <Card variant="outlined">
      <CardHeader>
        <Typography>{name}</Typography>
        <CardMedia>imagem do produto</CardMedia>
        <CardContent>
          <Typography>preço</Typography>
          <ButtonGroup>
            <Button>+</Button>
            <TextField />
            <Button>-</Button>
          </ButtonGroup>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

CardDrinks.propTypes = {
  product: PropTypes.objectOf({
    product: PropTypes.objectOg({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      urlImage: PropTypes.string,
    }),
  }).isRequired,
};
