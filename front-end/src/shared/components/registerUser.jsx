import React, { useState, useContext } from 'react';
import {
  InputLabel,
  TextField,
  NativeSelect,
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
          size="small"
          inputProps={ { 'data-testid': 'admin_manage__input-name' } }
          variant="filled"
          label="Nome"
          labelId="name_field"
          name="name"
          onChange={ (e) => handleChange(e) }
        />
        <InputLabel id="address_field" />
        <TextField
          size="small"
          sx={ { margin: '1rem' } }
          inputProps={ { 'data-testid': 'admin_manage__input-email' } }
          variant="filled"
          label="Email"
          labelId="email_field"
          name="email"
          onChange={ (e) => handleChange(e) }
        />
        <InputLabel id="number_field" />
        <TextField
          sx={ { margin: '1rem' } }
          size="small"
          inputProps={ {
            'data-testid': 'admin_manage__input-password',
          } }
          variant="filled"
          label="Senha"
          labelId="password_field"
          type="password"
          name="password"
          onChange={ (e) => handleChange(e) }
        />
        <NativeSelect
          sx={ { margin: '1rem' } }
          inputProps={ {
            'data-testid': 'admin_manage__select-role',
          } }
          labelId="tipo_select"
          id="tipo"
          label="Tipo"
          name="role"
          onChange={ (e) => handleChange(e) }
        >
          <option disabled selected>Tipo</option>
          <option value="seller"> Vendedor </option>
          <option value="customer"> Usuario </option>

        </NativeSelect>
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
