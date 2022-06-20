import React, { useContext } from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  Table,
  IconButton,
  TableContainer,
  TableBody,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import Context from '../contexts/Context';

const testId = 'customer_checkout__element-order-table-';

export default function TableCheckout() {
  const { removeProductsById, userCart } = useContext(Context);
  return (
    <TableContainer>
      <Table sx={ { minWidth: 650 } } size="small" aria-label="a dense table">
        <TableHead>
          <TableRow
            sx={ { '&:last-child td, &:last-child th': { textAlign: 'center' } } }
          >
            <TableCell>Item</TableCell>
            <TableCell>Descrição</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Valor Unitário</TableCell>
            <TableCell>Sub-total</TableCell>
            <TableCell>Remover Item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody
          sx={
            { '&:last-child td, &:last-child th': { border: 0, textAlign: 'center' } }
          }
        >
          {userCart.map((item, index) => (
            <TableRow
              key={ userCart.name }
            >
              <TableCell
                data-testid={ `${testId}item-number-${index}` }
              >
                {index + 1}
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                data-testid={ `${testId}name-${index}` }
              >
                {item.name}
              </TableCell>
              <TableCell
                data-testid={ `${testId}quantity-${index}` }
              >
                {item.count}
              </TableCell>
              <TableCell
                data-testid={ `${testId}unit-price-${index}` }
              >
                {item.price.replace('.', ',')}
              </TableCell>
              <TableCell
                data-testid={ `${testId}sub-total-${index}` }
              >
                {(item.price * item.count).toFixed(2).replace('.', ',')}
              </TableCell>
              <TableCell>
                <IconButton
                  data-testid={ `${testId}remove-${index}` }
                  aria-label="delete"
                  size="large"
                  onClick={ () => removeProductsById(item.id) }
                >
                  <Delete fontSize="inherit" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
