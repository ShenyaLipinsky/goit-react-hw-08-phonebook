import { Box } from 'components/Box';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authOperations } from 'redux/auth/authOperations';
import { authSelectors } from 'redux/auth/authSlice';
import { GreetingMessage, Link, LogOutBtn } from './AppBar.styled';

export const AppBar = () => {
  let loggedIn = useSelector(authSelectors.getIsLoggedIn);
  let userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <Box as="nav">
      {loggedIn ? (
        <Box
          as="ul"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={3}
        >
          <li>
            <Link to="/">Add Contacts</Link>
            <Link to="contacts">Contacts</Link>
          </li>
          <Box
            as="li"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="240px"
          >
            <GreetingMessage>Hello {userName}</GreetingMessage>
            <LogOutBtn
              onClick={() => {
                dispatch(authOperations.logOut());
              }}
            >
              LogOut
            </LogOutBtn>
          </Box>
        </Box>
      ) : (
        <Box
          as="ul"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={3}
        >
          <Box as="li" display="flex">
            <Link to="login">LogIn</Link>
            <Link to="register">Registration</Link>
          </Box>
        </Box>
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
