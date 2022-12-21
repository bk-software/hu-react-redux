import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import routes from '../../router/routes';
import NavBarLink from '../../components/navigation/NavBarLink';

function Header() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <NavBarLink to={routes.HOMEPAGE}>
          <Typography
            sx={{
              fontFamily: 'fantasy',
              fontWeight: 900,
              fontSize: 30,
            }}
          >
            MYCards
          </Typography>
        </NavBarLink>
        <NavBarLink to={routes.ABOUT_PAGE}>
          <Button color="inherit">About</Button>
        </NavBarLink>
        <NavBarLink to="/unexist">
          <Button color="inherit">unexist page</Button>
        </NavBarLink>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
