import { Grid } from '@mui/material';

export default function Gride({ children }) {
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
