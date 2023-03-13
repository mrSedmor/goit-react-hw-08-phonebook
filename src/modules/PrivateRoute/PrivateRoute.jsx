import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/auth-selectors';

export default function PrivateRoute() {
  const { isLoggedIn, token } = useSelector(selectAuth);
  // const allowAccess = isLoggedIn || Boolean(token);
  // console.log('allowAccess', allowAccess);

  if (!isLoggedIn && token) {
    return <p>Logging in...</p>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
