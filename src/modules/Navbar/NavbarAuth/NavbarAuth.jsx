import { NavLink } from 'react-router-dom';

// import css from './NavbarAuth.module.css';

export default function NavbarAuth() {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
