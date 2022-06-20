import React from 'react';
import { TableHead, TableRow, TableCell } from '@mui/material';

export default function ListedUserHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">Item</TableCell>
        <TableCell align="center">Nome</TableCell>
        <TableCell align="center">E-mail</TableCell>
        <TableCell align="center">Tipo</TableCell>
        <TableCell align="center">Excluir</TableCell>
      </TableRow>
    </TableHead>
  );
}
