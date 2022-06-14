import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Container,
  InputLabel,
  NativeSelect,
  Paper,
  TextField,
} from '@mui/material';
import { Box } from '@mui/system';
import NavBar from '../shared/components/navBar';
import Context from '../shared/contexts/Context';
import TableComponent from '../shared/components/tableComponent';
import { getSellers } from '../shared/services/api';
import { ContainerCheckoutItems } from '../style/Styles-MUI';


export default function CustomerCheckout() {
  const { getTotalAmount } = useContext(Context);
  const navigate = useNavigate();

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

  function handleClick() {
    navigate('../customer/orders/:id', { replace: true });
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
    <>
      <NavBar />
      <Container
      
      >
        <Paper

          sx={ {
            // marginTop: '2rem',
            padding: '2rem',            
          } }
        >
          <TableComponent />
          <ContainerCheckoutItems>
            <span>Total: R$</span>
            <span data-testid="customer_checkout__element-order-total-price">
              {getTotalAmount()}
            </span>
          </ContainerCheckoutItems>
        </Paper>
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
              {sellers
                ? sellers.map((seller) => (
                  <option key={ seller.id } value={ seller.name }>
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
      </Container>
    </>
  );
}
