import Layout from '../layout/Layout';
import PageHeader from '../components/PageHeader';
import { Typography, Grid } from '@mui/material';

function ErrorPage() {
  return (
    <Layout>
      <PageHeader title="Error 404" subtitle="Page not found" />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5">
            Oops... The requested URL was not found on this server
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <img
            width="100%"
            src="/assets/images/broken-robot.png"
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

export default ErrorPage;
