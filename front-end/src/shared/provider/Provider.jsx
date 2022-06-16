import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Context from '../contexts/Context';
import { getProducts } from '../services/api';

export default function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [userCart, setUserCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  const [disableCartButton, setDisableCartButton] = useState(true);
  const [order, setOrder] = useState();
  const [deliveryStatus, setDeliveryStatus] = useState('Pendente');

  useEffect(() => {
    async function fetchAPI() {
      const response = await getProducts();
      setProducts(response);
    }
    fetchAPI();
  }, []);

  function getTotalAmount() {
    let total = 0;
    if (userCart) {
      userCart.forEach((product) => {
        const totalProduct = product.count * product.price;
        total += totalProduct;
      });
    }
    setTotalAmount(total.toFixed(2).replace('.', ','));
    return totalAmount;
  }

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

  const removeProductsById = (id) => {
    const cart = [...userCart];
    const cartFiltered = cart.filter((p) => p.id !== id);
    const cartStringFy = JSON.stringify(cartFiltered);
    localStorage.setItem('carrinho', cartStringFy);
    setUserCart(cartFiltered);
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
    products,
    getTotalAmount,
    removeProductsById,
    order,
    setOrder,
    deliveryStatus,
    setDeliveryStatus,
  };

  return <Context.Provider value={ myProvider }>{children}</Context.Provider>;
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
