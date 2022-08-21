import { Routes, Route, useLocation } from 'react-router-dom';
import { authSelectors } from '../redux/auth/authSlice';
import { Box } from './Box';
import { ContactForm } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactsSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { AppBar } from './AppBar/AppBar';
import { LogIn } from './LogIn/LogIn';
import { Registration } from './Registration/Registration';

export const App = () => {
  const { data: contacts } = useGetContactsQuery();
  let filter = useSelector(getFilter);
  let loggedIn = useSelector(authSelectors.getIsLoggedIn);
  let userName = useSelector(authSelectors.getUserName);
  console.log(userName);
  const location = useLocation();
  return (
    <Routes>
      {location.pathname === '/' ? (
        <Route
          path="/"
          element={
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
                <h1>PhoneBook</h1>
                <ContactForm />
              </Box>
            </>
          }
        />
      ) : (
        <Route path="/" element={<AppBar />}>
          {/* {loggedIn ? ( */}
          <Route
            path="contacts"
            element={
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
                {contacts && (
                  <>
                    <h2>Contacts</h2>
                    <Filter title="Find contacts by name" value={filter} />
                    <Contacts />
                  </>
                )}
              </Box>
            }
          />
          {/* ) : ( */}
          <>
            <Route path="login" element={<LogIn />} />
            <Route path="register" element={<Registration />} />
          </>
          {/* )} */}
        </Route>
      )}
    </Routes>
  );
};
