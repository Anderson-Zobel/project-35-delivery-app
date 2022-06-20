import React, { useEffect, useState } from 'react';
import NavBar from '../shared/components/NavBar';
import OrderCard from '../shared/components/OrderCard';
import { getOrderByUserId } from '../shared/services/api';

export default function UserOrders() {
  const [orders, setOrders] = useState();
  useEffect(() => {
    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user);
    async function fetchApi(id, token) {
      const data = await getOrderByUserId(id, token);

      setOrders(data);
    }
    fetchApi(userObj.id, userObj.token);
  }, []);
  return (
    <>
      <NavBar />
      {orders
        ? orders.sales.map((order, index) => (
          <OrderCard key={ index } order={ order } index={ index } user="customer" />
        ))
        : null}
    </>
  );
}
