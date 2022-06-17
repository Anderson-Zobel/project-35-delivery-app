import { Paper, TableContainer } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListedUserBody from '../shared/components-pages/listedUserBody';
import ListedUserHeader from '../shared/components-pages/listedUserHeader';
import NavBar from '../shared/components-pages/NavBar';
import RegisterUser from '../shared/components-pages/registerUser';

export default function AdminPage() {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  let role = '';

  if (user) {
    role = JSON.parse(user).role;
  }

  useEffect(() => {
    if (role !== 'administrator') {
      navigate('../');
    }
  }, [role, navigate]);

  return (
    <>
      <NavBar />
      { role === 'administrator' ? (
        <>
          <RegisterUser />
          <Paper
            sx={ {
              display: 'flex',
              padding: '1rem',
              justifyContent: 'center',
              width: '1000px',
              margin: 'auto' } }
          >
            <TableContainer
              sx={ {
                display: 'flex',
                flexDirection: 'column',
              } }
            >
              <ListedUserHeader />
              <ListedUserBody />
            </TableContainer>
          </Paper>
        </>
      ) : null }
    </>
  );
}
