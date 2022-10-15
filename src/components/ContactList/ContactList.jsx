import Button from './../ButtonStiled/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ListItemWrap, List } from './ContactListStyled';
import { deleteContact } from '../../redux/contact/contOperations';
import { selectFiltredContakts } from 'redux/contact/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const filtredContacts = useSelector(selectFiltredContakts);

  const handleDelContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {filtredContacts.length > 0 ? (
        filtredContacts.map(contact => {
          return (
            <ListItemWrap key={contact.id}>
              {contact.name}: {contact.number}
              <Button onClick={() => handleDelContact(contact.id)}>
                Delete
              </Button>
            </ListItemWrap>
          );
        })
      ) : (
        <p>No any contact! add new</p>
      )}
    </List>
  );
};

export default ContactList;
