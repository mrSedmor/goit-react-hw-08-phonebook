import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { Button } from 'shared/components';
// import css from './NavbarUser.module.css';

export default function NavbarUser() {
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(logout());
  const user = 'User';
  return (
    <div>
      <span>{user}</span>
      <Button type="button" onClick={logoutUser}>
        Logout
      </Button>
    </div>
  );
}
