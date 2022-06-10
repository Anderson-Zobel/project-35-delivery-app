import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../contexts/Context';

export default function Provider({ children }) {
  const [userCart, setUserCart] = useState([]);

  const addProductCart = (id, name, count, price) => {
    const cart = [...userCart ] 
    const item = cart.find((p) => p.id === id); 
    if (!item) {
      cart.push({ id, name, count , price })
    } else {
      item.count = count
    }
    setUserCart(cart);    
  };

  const removeProductCart = (id, count) => {
    const cart = [...userCart ] 
    const item = cart.find((p) => p.id === id); 
    if (item && item.count > 1 && count !== 0) {
      item.count = count
      setUserCart(cart)       
    } else {
      const cartFiltered = cart.filter((p) => p.id !== id )
      setUserCart(cartFiltered)
    } 
  }

  const clearCart = () => {
    setUserCart([]);
  } 

  const myProvider = {
    addProductCart,
    removeProductCart,
    clearCart,
  };

  return (
    <Context.Provider value={ myProvider }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
