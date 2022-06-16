import React from 'react';
import { TableRow, TableCell } from '@mui/material';

export default function TableTitles() {
  return (
    <TableRow>
      <TableCell>Item</TableCell>
      <TableCell align="right">Descrição</TableCell>
      <TableCell align="right">Quantidade</TableCell>
      <TableCell align="right">Valor Unitário</TableCell>
      <TableCell align="right">Sub-total</TableCell>
    </TableRow>
  );
}
