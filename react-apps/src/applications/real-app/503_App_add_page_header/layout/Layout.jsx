import Header from './header/Header';
import Footer from './footer/Footer';
import Main from './main/Main';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

function Layout({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#e3f2fd',
      }}
    >
      <CssBaseline />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
