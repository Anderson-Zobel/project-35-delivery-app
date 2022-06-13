import React, { useContext } from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  Table,
  Button,
  TableContainer,
  TableBody,
} from '@mui/material';
import Context from '../contexts/Context';

export default function TableHeader() {
  const { removeProductsById, userCart } = useContext(Context);
  return (
    <TableContainer>
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
                order-table-item-number-${index}` }
              >
                {index + 1}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                data-testid={ `customer_checkout__
                element-order-table-name-${index}` }
              >
                {item.name}
              </TableCell>
              <TableCell
                align="right"
                data-testid={ `customer_checkout__
                element-order-table-quantity-${index}` }
              >
                {item.count}
              </TableCell>
              <TableCell
                align="right"
                data-testid={ `customer_checkout__
                element-order-table-unit-price-${index}` }
              >
                {item.price}
              </TableCell>
              <TableCell
                align="right"
                data-testid={ `customer_checkout__
                element-order-table-sub-total-${index}` }
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
  );
}
