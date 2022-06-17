import React from 'react';
import { Table, TableHead, TableRow, TableCell } from '@mui/material';

export default function ListedUserHeader() {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Item</TableCell>
          <TableCell>Nome</TableCell>
          <TableCell>E-mail</TableCell>
          <TableCell>Tipo</TableCell>
          <TableCell>Excluir</TableCell>
        </TableRow>
      </TableHead>
    </Table>

  );
}
