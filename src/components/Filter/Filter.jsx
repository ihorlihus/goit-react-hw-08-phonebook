import { ContactFormInput } from 'components/ContactForm/ContactFirmStyled';
import { useDispatch } from 'react-redux';
import { addFilterValue } from 'redux/contact/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    dispatch(addFilterValue(event.currentTarget.value.toLowerCase().trim()));
  };

  return (
    <label>
      Find contacts by name{' '}
      <ContactFormInput type="text" onChange={changeFilter} />
    </label>
  );
};

export default Filter;
