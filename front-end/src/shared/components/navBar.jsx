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

export default function NavBar() {
  return (
    <AppBar position="static">
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
          {' '}
          Nome Cliente
          {' '}
        </Typography>
        <Button color="inherit" sx={ { pl: 3 } }>
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
