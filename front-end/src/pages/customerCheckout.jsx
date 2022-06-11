import React, { useContext } from 'react';
import Context from '../shared/contexts/Context';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import NavBar from '../shared/components/navBar';
import { Box, Button } from '@mui/material';



const rows = [];

export default function CustomerCheckout() {
  const { userCart } = useContext(Context);

  return (
  <>
    <NavBar/>
    <Box sx={ { width: 700, display: 'flex', justifyContent: 'center' } }>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
            {userCart.map((item) => (
              <TableRow
                key={userCart.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right">Vazio</TableCell>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.count}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">
                  <Button>Remover</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  </>
  );
}