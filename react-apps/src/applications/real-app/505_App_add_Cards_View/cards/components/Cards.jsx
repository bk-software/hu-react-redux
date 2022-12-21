import Card from './card/Card';
import { Grid } from '@mui/material';

function Cards() {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card />
      </Grid>
    </Grid>
  );
}

export default Cards;
