import { Routes, Route } from 'react-router-dom';

import { Box } from './Box';
import { ContactForm } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactsSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  const { data: contacts } = useGetContactsQuery();
  let filter = useSelector(getFilter);

  return (
    <Routes>
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
              {contacts && (
                <>
                  <h2>Contacts</h2>
                  <Filter title="Find contacts by name" value={filter} />
                  <Contacts />
                </>
              )}
            </Box>
          </>
        }
      />
    </Routes>
  );
};
