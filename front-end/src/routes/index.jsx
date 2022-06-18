import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import CustomerProducts from '../pages/customerProducts';
import CustomerCheckout from '../pages/customerCheckout';
import CustomerOrderId from '../pages/customerOrderId';
import UserOrders from '../pages/userOrders';
import SellerOrders from '../pages/sellerOrders';
import AdminPage from '../pages/adminPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/products" element={ <CustomerProducts /> } />
      <Route path="/customer/checkout" element={ <CustomerCheckout /> } />
      <Route path="/customer/orders" element={ <UserOrders /> } />
      <Route path="/seller/orders" element={ <SellerOrders /> } />
      <Route path="/customer/orders/:id" element={ <CustomerOrderId /> } />
      <Route path="/seller/orders/:id" element={ <CustomerOrderId /> } />
      <Route path="/seller/orders/:id" element={ <CustomerOrderId /> } />
      <Route path="/admin/manage" element={ <AdminPage /> } />
    </Routes>
  );
}
