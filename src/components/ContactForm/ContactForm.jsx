import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contact/selectors';
import { ContactFormWrap, ContactFormInput } from './ContactFirmStyled';
import { addContact } from 'redux/contact/contOperations';
import Button from 'components/ButtonStiled/Button';

function SignUpForm() {
  const contactsInState = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    contactsInState.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    ) || contactsInState.find(contact => contact.number === number)
      ? alert('This name or nomber is already in contacts')
      : dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <ContactFormWrap onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <ContactFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p>Tel</p>
        <ContactFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit">Add contact</Button>
    </ContactFormWrap>
  );
}

export default SignUpForm;
