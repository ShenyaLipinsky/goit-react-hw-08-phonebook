import { useRemoveContactMutation } from 'redux/contactsSlice';
import { ContactItem, ContactBtn } from '../Contacts/Contacts.styled';

export const ContactListItem = ({ id, name, number }) => {
  const [removeContact, { isLoading }] = useRemoveContactMutation();
  return (
    <ContactItem>
      <p>{name}:</p>
      <p>{number}</p>
      <ContactBtn
        id={id}
        onClick={() => removeContact(id)}
        disabled={isLoading}
      >
        Delete
      </ContactBtn>
    </ContactItem>
  );
};
