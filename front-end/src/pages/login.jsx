import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
import { Alert, Input } from '@mui/material';
import { PaperEdited, GridEdited, ButtonEdited } from '../style/Styles-MUI';
// import Grid from '../style/Grid'
import getUser from '../shared/services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState(false);
  const navigate = useNavigate();

  const enableButton = () => {
    const numeroMinimo = 5;
    const emailRegex = /.+@.+\.com/;
    const verifyEmail = emailRegex.test(email);
    const verifyPassword = password.length > numeroMinimo;
    return !(verifyEmail && verifyPassword);
  };

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLoginClick = async () => {
    // setButtonClicked(true);

    const response = await getUser({ email, password });
    if (response) {
      navigate('../customer/products', { replace: true });
    }
    setApiError(true);
  };

  const handleRegClick = () => {
    // setButtonClicked(true);
    navigate('../register', { replace: true });
  };

  return (
    <GridEdited>
      <PaperEdited>
        Login
        <Input
          fullWidth
          placeholder="email"
          name="email"
          // value={}
          onChange={ handleChange }
          type="email"
          data-testid="common_login__input-email"
        />
        Senha
        <Input
          fullWidth
          placeholder="******"
          name="password"
          // value={}
          onChange={ handleChange }
          type="password"
          data-testid="common_login__input-password"
        />
        <ButtonEdited
          // classes={ {root: "button-login" }}
          type="button"
          data-testid="common_login__button-login"
          disabled={ enableButton() }
          onClick={ () => handleLoginClick() }
        >
          Login
        </ButtonEdited>
        {}
        <ButtonEdited
          data-testid="common_login__button-register"
          onClick={ () => handleRegClick() }
        >
          Ainda não tenho conta
        </ButtonEdited>
        {apiError ? (
          <Alert
            severity="error"
            data-testid="common_login__element-invalid-email"
          >
            Email e/ou senhas inválidos!
          </Alert>
        ) : null}
      </PaperEdited>
    </GridEdited>
  );
}
