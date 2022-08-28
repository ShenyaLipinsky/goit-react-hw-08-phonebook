import Notiflix from 'notiflix';
import { notiflixOptions } from 'redux/auth/authOperations';
import { useRemoveContactMutation } from 'redux/contactsSlice';
import { ContactItem, ContactBtn } from '../Contacts/Contacts.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [removeContact, { error = false, isLoading }] =
    useRemoveContactMutation();
  return (
    <ContactItem>
      <p>{name}</p>
      <p>{number}</p>
      <ContactBtn
        id={id}
        onClick={() => {
          removeContact(id);
        }}
        disabled={isLoading}
      >
        Delete
      </ContactBtn>
      {error &&
        Notiflix.Notify.failure(
          `Contact not found, refresh page or try later`,
          notiflixOptions
        )}
    </ContactItem>
  );
};
