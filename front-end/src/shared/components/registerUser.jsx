import React, { useState, useContext } from 'react';
import {
  InputLabel,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Paper,
  Button,
  Box,
  Alert,
} from '@mui/material';
import Context from '../contexts/Context';
import { adminRequestRegister } from '../services/api';
import { ContainerTitleText } from '../../style/Styles-MUI';

export default function RegisterUser() {
  const { setUsers } = useContext(Context);
  const [apiError, setApiError] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', password: '', role: '' });

  const enableButton = () => {
    const { email, password, name } = newUser;
    const numeroMinimo = 5;
    const nameNumber = 11;
    const emailRegex = /.+@.+\.com/;
    const verifyEmail = emailRegex.test(email);
    const verifyPassword = password.length > numeroMinimo;
    const verifyName = name.length > nameNumber;

    return !(verifyEmail && verifyPassword && verifyName);
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'name') {
      setNewUser((prevState) => ({ ...prevState, name: value }));
    }

    if (name === 'email') {
      setNewUser((prevState) => ({ ...prevState, email: value }));
    }

    if (name === 'password') {
      setNewUser((prevState) => ({ ...prevState, password: value }));
    }

    if (name === 'role') {
      setNewUser((prevState) => ({ ...prevState, role: value }));
    }
  };

  const handleClick = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const response = await adminRequestRegister(newUser, token);
    if (response.status) {
      return setApiError(true);
    }
    setUsers((prevState) => ([...prevState, newUser]));
  };

  return (
    <ContainerTitleText>
      <Box
        sx={ { p: 1, mr: 'auto', fontSize: '1.5rem' } }
      >
        Cadastrar Novo Usuário
      </Box>

      <Paper
        sx={ {
          display: 'flex',
          width: '1000px',
          align: 'center',
        } }
      >
        <InputLabel id="seller_select" />
        <TextField
          sx={ { margin: '1rem' } }
          size="medium"
          inputProps={ { 'data-testid': 'admin_manage__input-name' } }
          variant="filled"
          label="Nome"
          name="name"
          onChange={ (e) => handleChange(e) }
        />
        <InputLabel id="address_field" />
        <TextField
          size="medium"
          sx={ { margin: '1rem' } }
          inputProps={ { 'data-testid': 'admin_manage__input-email' } }
          variant="filled"
          label="Email"
          name="email"
          onChange={ (e) => handleChange(e) }
        />
        <InputLabel id="number_field" />
        <TextField
          sx={ { margin: '1rem' } }
          size="medium"
          inputProps={ {
            'data-testid': 'admin_manage__input-password',
          } }
          variant="filled"
          label="Senha"
          type="password"
          name="password"
          onChange={ (e) => handleChange(e) }
        />
        <FormControl
          sx={ { m: 1, width: '20%', margin: '1rem', justifyContent: 'center' } }
          size="medium"
        >
          <InputLabel id="seller_select"> Tipo </InputLabel>
          <Select
            inputProps={ {
              'data-testid': 'admin_manage__select-role',
            } }
            name="role"
            value={ newUser.role }
            id="seller_select"
            label="Tipo"
            onChange={ (e) => handleChange(e) }
          >
            <MenuItem value="customer">Cliente</MenuItem>
            <MenuItem value="seller">Vendedor</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={ { margin: '1rem' } }
          disabled={ enableButton() }
          onClick={ () => handleClick() }
          data-testid="admin_manage__button-register"
        >
          CADASTRAR
        </Button>
      </Paper>
      {apiError ? (
        <Alert
          severity="error"
          data-testid="admin_manage__element-invalid-register"
        >
          Usuario com nome ou email já cadastrado.
        </Alert>
      ) : null}
    </ContainerTitleText>
  );
}
