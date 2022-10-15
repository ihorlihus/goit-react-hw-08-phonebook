import { Container, Link } from '../AppStyled';
import { useSelector } from 'react-redux';
import authSelectors from './../../redux/auth/authSelectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </Container>
  );
};
