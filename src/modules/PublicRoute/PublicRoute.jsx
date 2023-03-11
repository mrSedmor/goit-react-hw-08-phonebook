import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute() {
  const isLoggedIn = false;
  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
}
