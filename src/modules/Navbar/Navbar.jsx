import { NavLink } from 'react-router-dom';

import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';

// import css from './Navbar.module.css';
import items from './items';
import useIsLoggedIn from 'shared/hooks/use-is-logged-in';

export default function Navbar() {
  const isLoggedIn = useIsLoggedIn();
  const filteredItems = isLoggedIn
    ? items
    : items.filter(({ isPrivate }) => !isPrivate);
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));
  return (
    <div>
      <NavLink to="/">Logo</NavLink>
      <ul>{elements}</ul>
      {isLoggedIn ? <NavbarUser /> : <NavbarAuth />}
    </div>
  );
}
