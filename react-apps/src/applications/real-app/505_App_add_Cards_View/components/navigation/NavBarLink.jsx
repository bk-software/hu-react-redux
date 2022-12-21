import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function getNavLinkStyle({ isActive }) {
  if (isActive) {
    return {
      all: 'unset',
      color: '#ffffffff',
    };
  } else {
    return {
      all: 'unset',
      color: '#ffffffc9',
    };
  }
}

function NavBarLink({ to, children }) {
  return (
    <NavLink to={to} style={getNavLinkStyle}>
      {children}
    </NavLink>
  );
}

NavBarLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavBarLink;
