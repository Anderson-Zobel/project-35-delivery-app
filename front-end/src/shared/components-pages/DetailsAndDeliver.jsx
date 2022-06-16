import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputLabel, NativeSelect, Paper, Box, TextField, Button } from '@mui/material';
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
  console.log(totalPrice);

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

  return (
    <Paper sx={ { padding: '2rem', mt: 2 } }>
      <Box sx={ { minWidth: 120 } }>
        <InputLabel id="seller_select">Vendedor</InputLabel>
        <NativeSelect
          inputProps={ {
            'data-testid': 'customer_checkout__select-seller',
          } }
          labelId="seller_select"
          id="seller"
          label="Seller"
          value={ selectedSeller }
          onChange={ (e) => handleSelectChange(e) }
        >
          <option> -- select an option -- </option>
          {sellers
            ? sellers.map((seller) => (
              <option key={ seller.id } value={ seller.id }>
                {seller.name}
              </option>
            ))
            : null}
        </NativeSelect>
        <InputLabel id="address_field">Endereço</InputLabel>
        <TextField
          inputProps={ { 'data-testid': 'customer_checkout__input-address' } }
          variant="filled"
          label="Endereço"
          labelId="address_field"
          value={ address }
          name="address"
          onChange={ (e) => handleChange(e) }
        />
        <InputLabel id="number_field">Number</InputLabel>
        <TextField
          inputProps={ {
            'data-testid': 'customer_checkout__input-addressNumber',
          } }
          variant="filled"
          label="Número"
          labelId="number_field"
          value={ number }
          name="number"
          onChange={ (e) => handleChange(e) }
        />
      </Box>

      <Button
        data-testid="customer_checkout__button-submit-order"
        onClick={ () => handleClick() }
      >
        Finalizar Pedido
      </Button>
    </Paper>
  );
}
