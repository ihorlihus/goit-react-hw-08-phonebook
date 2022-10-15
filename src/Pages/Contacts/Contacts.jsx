import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/contact/selectors';
import ContactList from '../../components/ContactList/ContactList';
import SignUpForm from '../../components/ContactForm/ContactForm';
import Filter from '../../components/Filter/Filter';
import { fetchContacts } from 'redux/contact/contOperations';
import { useEffect } from 'react';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
      }}
    >
      <div>
        <h1>Phonebook</h1>
        <SignUpForm />
      </div>
      <div>
        <h1>Contacts {isLoading && !error && <b>Request in progress...</b>}</h1>
        <Filter />
        {error && <p>{error}</p>}
        <ContactList />
      </div>
    </div>
  );
};
