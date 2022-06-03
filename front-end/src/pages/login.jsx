import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import '../style/login.css';
import getUser from '../shared/services/api';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const enableButton = () => {
    const numeroMinimo = 5;
    const emailRegex = /.+@.+\.com/;
    const verifyEmail = emailRegex.test(email);
    const verifyPassword = password.length > numeroMinimo;
    return !(verifyEmail && verifyPassword);
  };

  const handleChange = async ({ target: { name, value } }) => {
    if (name === 'email') {
      await setEmail(value);
    }
    if (name === 'password') {
      await setPassword(value);
    }
  };

  const handleClick = async () => {
    setButtonClicked(true);

    const response = await getUser({ email, password });
    return response;
  };

  return (
    <div>
      <form className="login-component">
        Login
        <input
          placeholder="email"
          name="email"
          // value={}
          onChange={ handleChange }
          type="email"
          data-testid="common_login__input-email"
        />
        Senha
        <input
          placeholder="******"
          name="password"
          // value={}
          onChange={ handleChange }
          type="password"
          data-testid="common_login__input-password"
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ enableButton() }
          onClick={ handleClick }
        >
          Login
        </button>
        {
          buttonClicked && <Navigate to="/customer-products" />
        }
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}
