import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

function PageHeader({ title, subtitle }) {
  return (
    <Box pt={2}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h5">{subtitle}</Typography>
      <Divider />
    </Box>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default PageHeader;
