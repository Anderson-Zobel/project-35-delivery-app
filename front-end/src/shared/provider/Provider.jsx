import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../contexts/Context';

export default function Provider({ children }) {
  const [userCart, setUserCart] = useState([]);

  const shoppingCart = (count, id) => {
    const newItem = { id, quantity: count };
    setUserCart([...userCart, newItem]);
  };

  const myProvider = {
    shoppingCart,
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
