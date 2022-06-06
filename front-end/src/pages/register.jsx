import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';
import { Alert } from '@mui/material';
import getUser from '../shared/services/api';

export default function Login() {
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

    const response = await getUser({ email, password });
    if (response) {
      navigate('../customer/products', { replace: true });
    }
    setApiError(true);
  };

  return (
    <div>
      <form className="login-component">
        <p>Cadastro</p>
        Nome
        <input
          name="userName"
          placeholder="nome"
          type="text"
          onChange={ handleChange }
          data-testid="common_register__input-name"
        />
        <label htmlFor="email">
          Email
          <input
            placeholder="email"
            name="email"
            // value={}
            onChange={ handleChange }
            type="email"
            data-testid="common_register__input-email"
          />
        </label>
        Senha
        <input
          placeholder="******"
          name="password"
          // value={}
          onChange={ handleChange }
          type="password"
          data-testid="common_register__input-password"
        />
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ enableButton() }
          onClick={ () => handleClick() }
        >
          Cadastrar
        </button>

        {apiError ? (
          <Alert
            severity="error"
            data-testid="common_register__element-invalid_register"
          >
            Email e/ou senhas inválidos!
          </Alert>
        ) : null}
      </form>
    </div>
  );
}
