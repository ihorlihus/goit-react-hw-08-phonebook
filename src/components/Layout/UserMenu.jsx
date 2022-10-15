import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../AppStyled';
import Button from 'components/ButtonStiled/Button';
import authSelectors from './../../redux/auth/authSelectors';
import { authOperations } from 'redux/auth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  return (
    <Container>
      <span>Welcome, {name.name} </span>
      <Button
        type="submit"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Out
      </Button>
    </Container>
  );
};
