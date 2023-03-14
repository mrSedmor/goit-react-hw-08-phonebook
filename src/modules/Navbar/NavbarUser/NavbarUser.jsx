import { useDispatch, useSelector } from 'react-redux';
import { selectUserEmail } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import { Button } from 'shared/components';
import css from './NavbarUser.module.css';

export default function NavbarUser() {
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(logout());
  const userEmail = useSelector(selectUserEmail);
  return (
    <div className={css.wrapper}>
      <span className={css.userEmail}>{userEmail}</span>
      <Button type="button" onClick={logoutUser}>
        Logout
      </Button>
    </div>
  );
}
