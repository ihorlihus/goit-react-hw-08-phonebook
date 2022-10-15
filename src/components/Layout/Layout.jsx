import { Outlet } from 'react-router-dom';
import { Container, Header } from '../AppStyled';
// import { Suspense } from 'react';

// import Loader from './Loeder';
import { Navigation } from './Navigation';
import { AuthNav } from './AuthNav';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from './../../redux/auth/authSelectors';

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
      <Outlet />
    </Container>
    //   <Suspense fallback={<Loader />}>
    //     <Outlet />
    //   </Suspense>
  );
};
