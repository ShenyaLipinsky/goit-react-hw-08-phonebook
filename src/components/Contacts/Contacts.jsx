import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getFilter } from 'redux/contactsSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { Box } from '../Box';
import { ContactListItem } from './ContactsItem';

const Contacts = () => {
  let filter = useSelector(getFilter);

  const { data: contacts } = useGetContactsQuery();

  const filterItems = (arr, query) => {
    if (arr === undefined || arr.length === 0) {
      return [];
    }
    let newArray = arr.filter(
      el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    return newArray;
  };

  return (
    <>
      <Box as="ul" mt={4} width="100%">
        {filterItems(contacts, filter).map(({ id, name, number }) => {
          return (
            <ContactListItem key={id} id={id} name={name} number={number} />
          );
        })}
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Contacts;
