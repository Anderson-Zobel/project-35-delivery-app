import React, { useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button } from '@mui/material';
import NavBar from '../shared/components/navBar';
import Context from '../shared/contexts/Context';

const rows = [];

export default function CustomerCheckout() {
  const { userCart, removeProductsById, getTotalAmount } = useContext(Context);

  return (
    <>
      <NavBar />
      <Box sx={ { width: 700, display: 'flex', justifyContent: 'center' } }>
        <TableContainer component={ Paper }>
          <Table sx={ { minWidth: 650 } } size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Item</TableCell>
                <TableCell align="right">Descrição</TableCell>
                <TableCell align="right">Quantidade</TableCell>
                <TableCell align="right">Valor Unitário</TableCell>
                <TableCell align="right">Sub-total</TableCell>
                <TableCell align="right">Remover Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userCart.map((item, index) => (
                <TableRow
                  key={ userCart.name }
                  sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
                >
                  <TableCell
                    align="right"
                    data-testid={ `customer_checkout__element-
                    order-table-item-number-${i}` }
                  >
                    {index + 1}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    data-testid={ `customer_checkout__element-order-table-name-${index}` }
                  >
                    {item.name}
                  </TableCell>
                  <TableCell
                    align="right"
                    data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
                  >
                    {item.count}
                  </TableCell>
                  <TableCell
                    align="right"
                    data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
                  >
                    {item.price}
                  </TableCell>
                  <TableCell
                    align="right"
                    data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
                  >
                    {(item.price * item.count).toFixed(2)}
                  </TableCell>
                  <TableCell
                    align="right"
                    data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  >
                    <Button onClick={ () => removeProductsById(item.id) }>
                      Remover
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box sx={ { backgroundColor: 'green', width: '700px', display: 'flex', justifyContent: 'center' } }>
        Total: R$
        <span data-testid="customer_checkout__element-order-total-price">{getTotalAmount()}</span>
      </Box>
    </>
  );
}
