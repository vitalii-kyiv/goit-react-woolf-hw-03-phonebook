import ContactListItem from 'components/ContactListItem/ContactListItemItem';

const ContactList = props => {
  const { getFilteredContacts, deleteContact } = props;
  return (
    <ul>
      {getFilteredContacts().map(contact => (
        <ContactListItem
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
