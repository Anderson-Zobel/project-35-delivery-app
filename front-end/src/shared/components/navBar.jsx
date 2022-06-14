import React from 'react';
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Button,
  Link,
} from '@mui/material';
// import { Link } from "react-router-dom";

function handleClick() {
  localStorage.removeItem('user');
}

function getName() {
  const user = localStorage.getItem('user');
  const userObj = JSON.parse(user);
  return userObj.name;
}

export default function NavBar() {
  return (
    <AppBar position="static" sx={ { marginBottom: '2rem' } }>
      <Toolbar sx={ { justifyContent: 'space-between' } }>
        <Stack direction="row" spacing={ 2 } sx={ { flexGrow: 1 } }>
          <Button color="inherit">
            <Link
              href="/customer/products"
              color="inherit"
              underline="none"
              data-testid="customer_products__element-navbar-link-products"
            >
              Produtos
            </Link>
          </Button>
          <Button color="inherit">
            <Link
              href="/orders"
              color="inherit"
              underline="none"
              data-testid="customer_products__element-navbar-link-orders"
            >
              Pedidos
            </Link>
          </Button>
        </Stack>
        <Typography
          sx={ { fontWeight: 'bold' } }
          component="div"
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {getName()}
        </Typography>
        <Button color="inherit" sx={ { pl: 3 } } onClick={ () => handleClick() }>
          <Link
            href="/login"
            color="inherit"
            underline="none"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Logout
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
