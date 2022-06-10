import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../contexts/Context';

export default function Provider({ children }) {
  const [userCart, setUserCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  const [disableCartButton, setDisableCartButton] = useState(true);

  const addProductCart = (id, name, count, price) => {
    const cart = [...userCart];
    const item = cart.find((p) => p.id === id);
    if (!item) {
      cart.push({ id, name, count, price });
    } else {
      item.count = count;
    }
    setUserCart(cart);
    const cartStringFy = JSON.stringify(cart);
    localStorage.setItem('carrinho', cartStringFy);
    setDisableCartButton(false);
  };

  const removeProductCart = (id, count) => {
    const cart = [...userCart];
    const item = cart.find((p) => p.id === id);
    if (item && item.count > 1 && count !== 0) {
      item.count = count;
      setUserCart(cart);
      const cartStringFy = JSON.stringify(cart);

      localStorage.setItem('carrinho', cartStringFy);
    } else {
      const cartFiltered = cart.filter((p) => p.id !== id);
      setUserCart(cartFiltered);
      if (cartFiltered.length === 0) {
        setDisableCartButton(true);
        localStorage.removeItem('carrinho');
      } else {
        const cartStringFy = JSON.stringify(cartFiltered);
        localStorage.setItem('carrinho', cartStringFy);
      }
    }
  };

  const clearCart = () => {
    setUserCart([]);
  };

  const myProvider = {
    addProductCart,
    removeProductCart,
    clearCart,
    userCart,
    totalAmount,
    setTotalAmount,
    disableCartButton,
  };

  return <Context.Provider value={ myProvider }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
