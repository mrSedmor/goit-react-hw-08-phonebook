import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageSpinner } from 'shared/components';
import { selectAuth } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <PageSpinner text="Logging in..." />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
