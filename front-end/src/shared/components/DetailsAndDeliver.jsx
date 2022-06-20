import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  InputLabel,
  Paper,
  Box,
  TextField,
  Button,
  Select,
  FormControl,
  MenuItem } from '@mui/material';
import { createOrder, getSellers } from '../services/api';
import Context from '../contexts/Context';

export default function DetailsAndDeliver() {
  const navigate = useNavigate();
  const { getTotalAmount } = useContext(Context);
  const [sellers, setSellers] = useState([]);
  const [selectedSeller, setSelectedSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    async function fetchAPI() {
      const response = await getSellers();
      setSellers(response.sellers);
    }
    fetchAPI();
  }, []);

  const totalPrice = parseFloat(getTotalAmount().replace(',', '.'));
  const cart = JSON.parse(localStorage.getItem('carrinho'));
  const user = JSON.parse(localStorage.getItem('user'));

  const body = {
    email: user.email,
    sellerId: +selectedSeller,
    totalPrice,
    deliveryAddress: address,
    deliveryNumber: number,
    status: 'Pendente',
    cart,
  };

  async function handleClick() {
    const userToken = user.token;
    const response = await createOrder(body, userToken);

    navigate(`../customer/orders/${response.order.id}`, { replace: true });
  }

  function handleSelectChange(event) {
    setSelectedSeller(event.target.value);
  }

  function handleChange({ target }) {
    if (target.name === 'address') {
      setAddress(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
  }
  const boxStyle = {
    minWidth: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    mb: '1rem',
  };

  return (
    <Paper sx={ { padding: '2rem', mt: 2 } }>
      <Box sx={ boxStyle }>
        <FormControl
          sx={ { m: 1, width: '20%', margin: '1rem', justifyContent: 'center' } }
          size="medium"
        >
          <InputLabel id="seller_select"> Vendedor </InputLabel>
          <Select
            inputProps={ {
              'data-testid': 'customer_checkout__select-seller',
            } }
            labelId="seller_select"
            id="seller_select"
            value={ selectedSeller }
            label="Vendedor"
            onChange={ (e) => handleSelectChange(e) }
          >
            {sellers
              ? sellers.map((seller) => (
                <MenuItem key={ seller.id } value={ seller.id }>{seller.name}</MenuItem>
              ))
              : null}
          </Select>
        </FormControl>
        <InputLabel id="address_field" />
        <TextField
          sx={ { width: '50%', margin: '1rem' } }
          inputProps={ { 'data-testid': 'customer_checkout__input-address' } }
          variant="filled"
          label="Endereço"
          labelId="address_field"
          value={ address }
          size="medium"
          name="address"
          onChange={ (e) => handleChange(e) }
        />
        <InputLabel id="number_field" />
        <TextField
          sx={ { width: '20%', margin: '1rem' } }
          inputProps={ {
            'data-testid': 'customer_checkout__input-addressNumber',
          } }
          variant="filled"
          size="medium"
          label="Número"
          labelId="number_field"
          value={ number }
          name="number"
          onChange={ (e) => handleChange(e) }
        />
      </Box>
      <Box sx={ { textAlign: 'center' } }>
        <Button
          variant="contained"
          color="success"
          size="large"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => handleClick() }
        >
          Finalizar Pedido
        </Button>
      </Box>
    </Paper>
  );
}
