import React, { useContext, useEffect } from 'react';
import { Table, TableBody, TableRow, TableCell, Button } from '@mui/material';
import { getUsers } from '../services/api';
import Context from '../contexts/Context';

export default function ListedUserBody() {
  const { users, setUsers } = useContext(Context);

  useEffect(() => {
    async function fetchAPI() {
      const response = await getUsers();
      setUsers(response);
    }
    fetchAPI();
  }, [setUsers]);
  return (
    <Table>
      <TableBody>
        { users.map((item, index) => (
          <TableRow key={ item.name }>
            <TableCell
              align="center"
              data-testid={ `admin_manage__element-user-table-item-number-${index}` }
            >
              { index + 1 }
            </TableCell>
            <TableCell
              align="center"
              data-testid={ `admin_manage__element-user-table-name-${index}` }
            >
              { item.name }
            </TableCell>
            <TableCell
              align="center"
              data-testid={ `admin_manage__element-user-table-email-${index}` }
            >
              { item.email }
              {' '}
            </TableCell>
            <TableCell
              align="center"
              data-testid={ `admin_manage__element-user-table-role-${index}` }
            >
              { item.role }
            </TableCell>
            <Button
              data-testid={ `admin_manage__element-user-table-remove-${index}` }
            >
              Excluir
            </Button>
          </TableRow>
        )) }
      </TableBody>
    </Table>
  );
}
