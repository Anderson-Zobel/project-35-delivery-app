import React, { useContext } from 'react';
import { Table, TableContainer, Container } from '@mui/material';
import Context from '../../contexts/Context';
import TableHeadContent from './TableHeadContent';
import TableBodycontent from './TableBodyContent';

export default function TableOrder() {
  const { order } = useContext(Context);

  return (
    <Container>
      { order ? (
        <>
          <TableContainer>
            <Table sx={ { minWidth: 650 } } size="small" aria-label="a dense table">
              <TableHeadContent />
              <TableBodycontent />
            </Table>
          </TableContainer>
          <Container>{ (order.totalPrice).replace('.', ',') }</Container>
        </>
      ) : null}
    </Container>
  );
}
