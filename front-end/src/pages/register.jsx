import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
import { Alert, Input } from '@mui/material';
import { PaperEdited, GridEdited, ButtonEdited } from '../style/Styles-MUI';
import { requestRegister } from '../shared/services/api';

export default function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  const enableButton = () => {
    const numeroMinimo = 5;
    const nameNumber = 11;
    const emailRegex = /.+@.+\.com/;
    const verifyEmail = emailRegex.test(email);
    const verifyPassword = password.length > numeroMinimo;
    const verifyName = userName.length > nameNumber;

    return !(verifyEmail && verifyPassword && verifyName);
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
    if (name === 'userName') {
      setUserName(value);
    }
  };

  const handleClick = async () => {
    // setButtonClicked(true);

    const response = await requestRegister({ name: userName, email, password });
    if (response) {
      navigate('../customer/products', { replace: true });
    }
    setApiError(true);
  };

  return (
    <GridEdited>
      <PaperEdited>
        <p>Cadastro</p>
        Nome
        <Input
          fullWidth
          name="userName"
          placeholder="nome"
          type="text"
          onChange={ handleChange }
          inputProps={ {
            'data-testid': 'common_register__input-name',
          } }
        />
        Email
        <Input
          fullWidth
          placeholder="email"
          name="email"
          onChange={ handleChange }
          type="email"
          inputProps={ {
            'data-testid': 'common_register__input-email',
          } }
        />
        Senha
        <Input
          fullWidth
          placeholder="******"
          name="password"
          // value={}
          onChange={ handleChange }
          type="password"
          inputProps={ {
            'data-testid': 'common_register__input-password',
          } }
        />
        <ButtonEdited
          type="button"
          data-testid="common_register__button-register"
          disabled={ enableButton() }
          onClick={ () => handleClick() }
        >
          Cadastrar
        </ButtonEdited>
        {apiError ? (
          <Alert
            severity="error"
            data-testid="common_register__element-invalid_register"
          >
            Dados incorretos!
          </Alert>
        ) : null}
      </PaperEdited>
    </GridEdited>
  );
}
