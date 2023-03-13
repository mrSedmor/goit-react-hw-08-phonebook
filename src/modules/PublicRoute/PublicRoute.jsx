import { Navigate, Outlet } from 'react-router-dom';
import useIsLoggedIn from 'shared/hooks/use-is-logged-in';

export default function PublicRoute() {
  const isLoggedIn = useIsLoggedIn();
  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
}
