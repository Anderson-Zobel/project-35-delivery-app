import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
import { Alert, Input, Button } from '@mui/material';
import { PaperEdited, GridEdited } from '../style/Styles-MUI';
import { requestLogin } from '../shared/services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState(false);
  const [logged, setLogged] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLogged({ role: user.role });
    }
  }, []);
  if (logged) {
    navigate('../customer/products');
  }

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
    const response = await requestLogin({ email, password });
    if (response) {
      const userData = JSON.stringify(response);
      localStorage.setItem('user', userData);
      switch (response.role) {
      case 'customer':
        return navigate('../customer/products', { replace: true });
      case 'administrator':
        return navigate('../admin/manage', { replace: true });
      default:
        return navigate('../seller/orders');
      }
    }
    setApiError(true);
  };

  const handleRegClick = () => {
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
          onChange={ handleChange }
          type="email"
          inputProps={ {
            'data-testid': 'common_login__input-email',
          } }
        />
        Senha
        <Input
          fullWidth
          placeholder="******"
          name="password"
          onChange={ handleChange }
          type="password"
          inputProps={ {
            'data-testid': 'common_login__input-password',
          } }
        />
        <Button
          type="button"
          data-testid="common_login__button-login"
          disabled={ enableButton() }
          onClick={ () => handleLoginClick() }
        >
          Login
        </Button>
        {}
        <Button
          data-testid="common_login__button-register"
          onClick={ () => handleRegClick() }
        >
          Ainda não tenho conta
        </Button>
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
