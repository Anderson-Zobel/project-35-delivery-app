import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/register" element={ <Register /> } />
    </Routes>
  );
}
