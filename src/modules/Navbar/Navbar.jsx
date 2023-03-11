import { NavLink } from 'react-router-dom';

import NavbarAuth from './NavbarAuth';
import NavbarUser from './NavbarUser';

// import css from './Navbar.module.css';
import items from './items';

export default function Navbar() {
  const filteredItems = items;
  const elements = filteredItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink to={link}>{text}</NavLink>
    </li>
  ));
  return (
    <div>
      <NavLink to="/">Logo</NavLink>
      <ul>{elements}</ul>
      <NavbarAuth />
      <NavbarUser />
    </div>
  );
}
