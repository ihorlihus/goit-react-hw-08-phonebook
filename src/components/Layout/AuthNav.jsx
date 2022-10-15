import { Container, Link } from '../AppStyled';

// import Loader from './Loeder';

export const AuthNav = () => {
  return (
    <Container>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign Up</Link>
    </Container>
  );
};
