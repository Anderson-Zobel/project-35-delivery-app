import React, { useContext, useEffect } from 'react';
import { TableBody, TableRow, TableCell, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { getUsers, adminRequestDeleteUser } from '../services/api';
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

  const handleClick = async (userId) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    await adminRequestDeleteUser(userId, token);

    const newUsers = users.filter((u) => u.id !== userId);
    setUsers(newUsers);
  };
  return (
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
          <TableCell
            align="center"
            data-testid={ `admin_manage__element-user-table-remove-${index}` }
          >
            <IconButton
              aria-label="delete"
              size="large"
              onClick={ () => handleClick(item.id) }
            >
              <Delete fontSize="inherit" />
            </IconButton>
          </TableCell>
        </TableRow>
      )) }
    </TableBody>
  );
}
