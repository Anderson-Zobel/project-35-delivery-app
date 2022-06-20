import React, { useContext } from 'react';
import { TableBody, TableRow, TableCell } from '@mui/material';
import Context from '../../contexts/Context';

export default function TableBodycontent() {
  const { order } = useContext(Context);
  const { role } = JSON.parse(localStorage.getItem('user'));

  const testId = `${role}_order_details__element-order-`;

  return (
    <TableBody>
      { order.products.map((item, index) => (
        <TableRow
          key={ item.name }
          sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
        >
          <TableCell
            align="right"
            data-testid={ `${testId}table-item-number-${index}` }
          >
            {index + 1}
          </TableCell>
          <TableCell
            component="th"
            scope="row"
            data-testid={ `${testId}table-name-${index}` }
          >
            {item.name}
          </TableCell>
          <TableCell
            align="right"
            data-testid={ `${testId}table-quantity-${index}` }
          >
            {item.SaleProduct.quantity}
          </TableCell>
          <TableCell
            align="right"
            data-testid={ `${testId}table-unit-price-${index}` }
          >
            {item.price.replace('.', ',')}
          </TableCell>
          <TableCell
            align="right"
            data-testid={ `${testId}table-sub-total-${index}` }
          >
            {(item.SaleProduct.quantity * item.price).toFixed(2).replace('.', ',')}
          </TableCell>
        </TableRow>
      )) }
    </TableBody>
  );
}
