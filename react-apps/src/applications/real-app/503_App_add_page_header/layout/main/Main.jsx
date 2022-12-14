import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Main({ children }) {
  return (
    <Container>
      <Box sx={{ mt: 2 }}>{children}</Box>
    </Container>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
