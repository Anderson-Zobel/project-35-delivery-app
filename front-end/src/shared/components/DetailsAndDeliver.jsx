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
  Alert,
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
  const [cartEmpty, setCartEmpty] = useState(false);

  const cart = JSON.parse(localStorage.getItem('carrinho'));
  const user = JSON.parse(localStorage.getItem('user'));
  const totalPrice = parseFloat(getTotalAmount().replace(',', '.'));

  const boxStyle = {
    minWidth: 120,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    mb: '1rem',
  };

  useEffect(() => {
    async function fetchAPI() {
      const response = await getSellers();
      setSellers(response.sellers);
    }
    fetchAPI();
  }, []);

  async function handleClick() {
    if (cart !== null) {
      const userToken = user.token;
      const body = {
        email: user.email,
        sellerId: +selectedSeller,
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: number,
        status: 'Pendente',
        cart,
      };
      const response = await createOrder(body, userToken);

      navigate(`../customer/orders/${response.order.id}`, { replace: true });
    } else {
      setCartEmpty(true);
    }
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
        {cartEmpty ? (
          <Alert
            severity="error"
            data-testid="admin_manage__element-invalid-register"
          >
            Não existe nenhum produto no carrinho para finalizar o pedido.
          </Alert>
        ) : null}
      </Box>
    </Paper>
  );
}
