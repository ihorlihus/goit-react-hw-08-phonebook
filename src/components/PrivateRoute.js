import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from './../redux/auth/authSelectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/login',
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
