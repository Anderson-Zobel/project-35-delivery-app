import { Paper, Box, Table } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ListedUserBody from '../shared/components-pages/listedUserBody';
import ListedUserHeader from '../shared/components-pages/listedUserHeader';
import NavBar from '../shared/components-pages/NavBar';
import RegisterUser from '../shared/components-pages/registerUser';
import { ContainerTitleText } from '../style/Styles-MUI';

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
          <ContainerTitleText>
            <Box
              sx={ { p: 1, mr: 'auto', fontSize: '1.5rem' } }
            >
              Lista de Usuários
            </Box>
            <Paper
              sx={ {
                display: 'flex',
                // padding: '1rem',
                justifyContent: 'center',
                width: '1000px',
                margin: 'auto' } }
            >
              <Table sx={ { align: 'center' } }>
                <ListedUserHeader />
                <ListedUserBody />
              </Table>
            </Paper>
          </ContainerTitleText>
        </>
      ) : null }
    </>
  );
}