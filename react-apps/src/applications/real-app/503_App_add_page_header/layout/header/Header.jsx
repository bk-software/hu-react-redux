import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

function getNavLinkStyle({ isActive }) {
  if (isActive) {
    return {
      color: '#ffffffff',
    };
  } else {
    return {
      color: '#ffffffc9',
    };
  }
}

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <NavLink to="/" style={getNavLinkStyle}>
          <Typography
            sx={{
              fontFamily: 'fantasy',
              fontWeight: 900,
              fontSize: 30,
            }}
          >
            MYCards
          </Typography>
        </NavLink>
        <NavLink to="/about" style={getNavLinkStyle}>
          <Button color="inherit">About</Button>
        </NavLink>
        <NavLink to="/unexist" style={getNavLinkStyle}>
          <Button color="inherit">unexist page</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
