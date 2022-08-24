import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../redux/auth/authSlice';
import { authOperations } from 'redux/auth/authOperations';
import { getFilter } from 'redux/contactsSlice';
import { AppBar } from './AppBar/AppBar';
import { Box } from './Box';
// import { ContactForm } from './Phonebook/Phonebook';
// import { LogIn } from './LogIn/LogIn';
// import { Registration } from './Registration/Registration';
// import { Filter } from './Filter/Filter';
// import { Contacts } from './Contacts/Contacts';

const ContactForm = lazy(() => import('./Phonebook/Phonebook'));
const LogIn = lazy(() => import('./LogIn/LogIn'));
const Registration = lazy(() => import('./Registration/Registration'));
const Filter = lazy(() => import('./Filter/Filter'));
const Contacts = lazy(() => import('./Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  let filter = useSelector(getFilter);
  let loggedIn = useSelector(authSelectors.getIsLoggedIn);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const location = useLocation();
  return (
    <Routes>
      {location.pathname === '/' ? (
        <Route
          path="/"
          element={
            loggedIn ? (
              <>
                <AppBar />
                <Box
                  mt={4}
                  mx={'auto'}
                  px={4}
                  py={5}
                  display={'flex'}
                  flexDirection="column"
                  alignItems="center"
                  width={3}
                  borderRadius={'large'}
                  bg={'secondary'}
                >
                  <Suspense fallback="....Loading">
                    <h1>PhoneBook</h1>
                    <ContactForm />
                  </Suspense>
                </Box>
              </>
            ) : (
              <Navigate to="login" replace={true} />
            )
          }
        />
      ) : (
        <Route path="/" element={<AppBar />}>
          <Route
            path="contacts"
            element={
              loggedIn ? (
                <Box
                  mt={4}
                  mx={'auto'}
                  px={4}
                  py={5}
                  display={'flex'}
                  flexDirection="column"
                  alignItems="center"
                  width={3}
                  borderRadius={'large'}
                  bg={'secondary'}
                >
                  <h2>Contacts</h2>
                  <Filter title="Find contacts by name" value={filter} />
                  <Suspense fallback="....Loading">
                    <Contacts />
                  </Suspense>
                </Box>
              ) : (
                <Navigate to="/login" replace={true} />
              )
            }
          />

          <Route
            path="login"
            element={
              loggedIn ? (
                <Navigate to="/contacts" replace={true} />
              ) : (
                <Box
                  mt={4}
                  mx={'auto'}
                  px={4}
                  py={5}
                  display={'flex'}
                  flexDirection="column"
                  alignItems="center"
                  width={3}
                  borderRadius={'large'}
                  bg={'secondary'}
                >
                  <LogIn />
                </Box>
              )
            }
          />
          <Route
            path="register"
            element={
              loggedIn ? (
                <Navigate to="/contacts" replace={true} />
              ) : (
                <Box
                  mt={4}
                  mx={'auto'}
                  px={4}
                  py={5}
                  display={'flex'}
                  flexDirection="column"
                  alignItems="center"
                  width={3}
                  borderRadius={'large'}
                  bg={'secondary'}
                >
                  <Registration />
                </Box>
              )
            }
          />
        </Route>
      )}
    </Routes>
  );
};
