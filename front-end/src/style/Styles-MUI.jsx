import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const MyPaper = styled(Paper)(() => ({
}));
const MyButton = styled(Button)(() => ({
}));
const MyContainer = styled(Container)(() => ({
}));

export const PaperEdited = styled(MyPaper)(() => ({
  maxWidth: 400,
  marginTop: '2rem',
  padding: '2rem',
  mr: 2,
}));

export const ButtonEdited = styled(MyButton)(() => ({
  display: 'block',
  padding: '10px',
  margin: 'auto',
}));

export const ContainerTitleText = styled(MyContainer)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '1rem',
  width: '1000px',
  padding: '0 !important',
}));

export function GridEdited({ children }) {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={ { minHeight: '100vh' } }
    >
      { children }
    </Grid>
  );
}

GridEdited.propTypes = {
  children: PropTypes.element.isRequired,
};
