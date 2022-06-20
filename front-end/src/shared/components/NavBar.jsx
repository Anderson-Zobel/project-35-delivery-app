import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Stack,
  Toolbar,
  Typography,
  Button,
  Link,
  IconButton,
} from '@mui/material';
import { Settings } from '@mui/icons-material';

export default function NavBar() {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  function handleClick() {
    localStorage.removeItem('user');
  }

  function getName() {
    const user = localStorage.getItem('user');
    const userObj = JSON.parse(user);
    return userObj.name;
  }

  const navigateClick = () => {
    navigate('../admin/manage', { replace: true });
  };

  return (
    <AppBar position="static" sx={ { marginBottom: '2rem' } }>
      <Toolbar sx={ { justifyContent: 'space-between' } }>
        <Stack direction="row" spacing={ 2 } sx={ { flexGrow: 1 } }>
          { role === 'customer' ? (
            <Button color="inherit">
              <Link
                href={ `/${role}/products` }
                color="inherit"
                underline="none"
                data-testid="customer_products__element-navbar-link-products"
              >
                Produtos
              </Link>
            </Button>
          ) : null}
          { role === 'administrator' ? (
            <IconButton
              color="inherit"
              size="large"
              data-testid="customer_products__element-navbar-link-orders"
              onClick={ () => navigateClick() }
            >
              <Settings
                size="large"
                fontSize="inherit"
              />
            </IconButton>
          ) : (
            <Button color="inherit">
              <Link
                href={ `/${role}/orders` }
                color="inherit"
                underline="none"
                data-testid="customer_products__element-navbar-link-orders"
              >
                Pedidos
              </Link>
            </Button>)}
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
