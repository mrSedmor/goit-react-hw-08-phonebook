import { NavLink, Link } from 'react-router-dom';

import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';

import css from './Navbar.module.css';
import logoImage from 'images/phonebook-logo.png';
import items from './items';
import useIsLoggedIn from 'shared/hooks/use-is-logged-in';

export default function Navbar() {
  const isLoggedIn = useIsLoggedIn();
  const filteredItems = isLoggedIn
    ? items
    : items.filter(({ isPrivate }) => !isPrivate);
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id} className={css.navItem}>
      <NavLink to={link} className={css.navLink}>
        {text}
      </NavLink>
    </li>
  ));
  return (
    <header className={css.header}>
      <div className={`container ${css.navBar}`}>
        <Link to="/">
          <img src={logoImage} className={css.logo} alt="Phonebook Logo" />
        </Link>
        <ul>{elements}</ul>
        {isLoggedIn ? <NavbarUser /> : <NavbarAuth />}
      </div>
    </header>
  );
}
