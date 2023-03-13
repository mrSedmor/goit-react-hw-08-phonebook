import { NavLink } from 'react-router-dom';

import css from './NavbarAuth.module.css';

export default function NavbarAuth() {
  return (
    <div>
      <NavLink to="/register" className={css.authLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.authLink}>
        Login
      </NavLink>
    </div>
  );
}
