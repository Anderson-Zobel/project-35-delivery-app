import React from 'react';
import '../style/login.css';

export default function Login() {
  return (
    <div className="login-component">
      Login
      <input
        placeholder="email"
        name="email"
        // value={}
        // onChange={}
        type="email"
        data-testid=""
      />
      Senha
      <input
        placeholder="******"
        name="password"
        // value={}
        // onChange={}
        type="password"
        data-testid=""
      />
      <button
        type="button"
        data-testid=""
      >
        Login
      </button>
      <button
        type="button"
      >
        Ainda não tenho conta
      </button>
    </div>
  );
}
