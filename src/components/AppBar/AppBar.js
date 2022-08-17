import { Box } from 'components/Box';
import { NavLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Box as="nav">
      <Box
        as="ul"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/login">LogIn</NavLink>
          <NavLink to="/register">Registration</NavLink>
        </li>
        <Box
          as="li"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="240px"
        >
          <p>Hello _username_</p>
          <button>LogOut</button>
        </Box>
      </Box>
    </Box>
  );
};
