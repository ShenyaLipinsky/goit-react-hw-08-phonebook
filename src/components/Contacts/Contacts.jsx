import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contactsSlice';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { Box } from '../Box';
import { ContactListItem } from './ContactsItem';

export const Contacts = () => {
  let filter = useSelector(getFilter);

  const { data: contacts } = useGetContactsQuery();

  const filterItems = (arr, query) => {
    if (arr.length !== 0 || undefined) {
      let newArray = arr.filter(
        el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
      return newArray;
    }
    return;
  };

  return (
    <Box as="ul" mt={4} width="100%">
      {filterItems(contacts, filter).map(({ id, name, phone }) => {
        return <ContactListItem key={id} id={id} name={name} number={phone} />;
      })}
    </Box>
  );
};
