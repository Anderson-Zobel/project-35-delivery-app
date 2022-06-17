import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import NavBar from '../shared/components-pages/NavBar';
import OrderCard from '../shared/components-pages/OrderCard';
import { getOrderBySellerId } from '../shared/services/api';

export default function SellerOrders() {
  const [orders, setOrders] = useState();
  useEffect(() => {
    const seller = localStorage.getItem('user');
    const sellerObj = JSON.parse(seller);
    async function fetchApi(id, token) {
      const data = await getOrderBySellerId(id, token);

      setOrders(data);
    }
    fetchApi(sellerObj.id, sellerObj.token);
  }, []);
  return (
    <>
      <NavBar />
      {orders
        ? orders.sales.map((order, index) => (
          <Box key={ index }>
            <OrderCard order={ order } index={ index } user="seller" />
          </Box>
        ))
        : null}
    </>
  );
}
