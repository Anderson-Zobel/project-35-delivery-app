import React, { useState, useContext } from 'react';
import {
  Container,
  InputLabel,
  TextField,
  NativeSelect,
  Paper,
  Button,
  Box,
} from '@mui/material';
import Context from '../contexts/Context';
import { requestRegister } from '../services/api';

const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem',
};

export default function RegisterUser() {
  const { setUsers } = useContext(Context);
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
    await requestRegister(newUser);
    setUsers((prevState) => ([...prevState, newUser]));
  };

  return (
    <Container
      style={ style }
    >
      <Box
        component="span"
        sx={ { p: 2, border: '1px dashed grey', textAlign: 'center' } }
      >
        Cadastrar Novo Usuário
      </Box>

      <Paper
        sx={ {
          display: 'flex',
          padding: '1rem',
          justifyContent: 'space-around',
          width: '1000px',
        } }
      >
        <InputLabel id="seller_select" />
        <TextField
          inputProps={ { 'data-testid': 'admin_manage__input-name' } }
          variant="filled"
          label="Nome"
          labelId="name_field"
          // value={}
          name="name"
          onChange={ (e) => handleChange(e) }
        />
        <InputLabel id="address_field" />
        <TextField
          inputProps={ { 'data-testid': 'admin_manage__input-email' } }
          variant="filled"
          label="Email"
          labelId="email_field"
          // value={}
          name="email"
          onChange={ (e) => handleChange(e) }
        />
        <InputLabel id="number_field" />
        <TextField
          inputProps={ {
            'data-testid': 'admin_manage__input-password',
          } }
          variant="filled"
          label="Senha"
          labelId="password_field"
          type="password"
          // value={ number }
          name="password"
          onChange={ (e) => handleChange(e) }
        />
        <NativeSelect
          inputProps={ {
            'data-testid': 'admin_manage__input-role',
          } }
          labelId="tipo_select"
          id="tipo"
          label="Tipo"
          name="role"
          // value={}
          onChange={ (e) => handleChange(e) }
        >
          <option disabled selected>Tipo</option>
          <option value="seller"> Vendedor </option>
          <option value="customer"> Usuario </option>

        </NativeSelect>
        <Button disabled={ enableButton() } onClick={ () => handleClick() }>
          CADASTRAR
        </Button>
      </Paper>
    </Container>

  );
}
