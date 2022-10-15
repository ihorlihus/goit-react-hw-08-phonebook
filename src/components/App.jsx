import { Route, Routes } from 'react-router-dom';
import { Contacts } from './../Pages/Contacts/Contacts';
import { Home } from './../Pages/Home/Home';
import { LogIn } from '../Pages/Login/LogIn';
import { SignUp } from '../Pages/Signup/SignUp';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from './../redux/auth/authSelectors';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PublicRoute component={<Home />} />} />
        <Route
          path="/signup"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<SignUp />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<LogIn />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
