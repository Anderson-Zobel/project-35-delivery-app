import React, { useContext } from 'react';
import {
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableContainer,
  TableBody,
} from '@mui/material';
import Context from '../contexts/Context';

const testId = 'customer_order_details__element-order-table-';

export default function TableOrder() {
  const { userCart } = useContext(Context);
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
                align="right"
                data-testid={ `${testId}quantity-${index}` }
              >
                {item.count}
              </TableCell>
              <TableCell
                align="right"
                data-testid={ `${testId}unit-price-${index}` }
              >
                {item.price.replace('.', ',')}
              </TableCell>
              <TableCell
                align="right"
                data-testid={ `${testId}sub-total-${index}` }
              >
                {(item.price * item.count).toFixed(2).replace('.', ',')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
