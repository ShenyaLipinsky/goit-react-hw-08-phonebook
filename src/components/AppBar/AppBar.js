import { Box } from 'components/Box';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { authOperations } from 'redux/auth/authOperations';
import { authSelectors } from 'redux/auth/authSlice';
import { NavLink } from './AppBar.styled';

export const AppBar = () => {
  let loggedIn = useSelector(authSelectors.getIsLoggedIn);
  let userName = useSelector(authSelectors.getUserName);
  const dispatch = useDispatch();
  return (
    <Box as="nav">
      <Box
        as="ul"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
      >
        {loggedIn ? (
          <>
            <li>
              <NavLink to="/">Add Contacts</NavLink>
              <NavLink to="contacts">Contacts</NavLink>
            </li>
            <Box
              as="li"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              width="240px"
            >
              <p>Hello {userName}</p>
              <button
                onClick={() => {
                  dispatch(authOperations.logOut());
                }}
              >
                LogOut
              </button>
            </Box>
          </>
        ) : (
          <>
            <li>
              <NavLink to="login">LogIn</NavLink>
              <NavLink to="register">Registration</NavLink>
            </li>
          </>
        )}
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
