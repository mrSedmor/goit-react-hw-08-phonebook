// import css from './NavbarUser.module.css';

export default function NavbarUser() {
  const user = 'User';
  return (
    <div>
      <span>{user}</span>
      <button type="button">Logout</button>
    </div>
  );
}
