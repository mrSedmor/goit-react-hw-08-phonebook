import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { current } from 'redux/auth/auth-operations';

export default function AuthLayout({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return <>{children}</>;
}
