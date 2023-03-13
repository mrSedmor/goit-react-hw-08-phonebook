import logoImage from 'images/phonebook-logo.png';
import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-title">Welcome!</h1>
        <p className={css.text}>
          We are very glad that you have visited our website. Here you can
          create and manage your personal phonebook.
        </p>
        <img className={css.logo} src={logoImage} alt="Phonebook logo" />
        <p className={css.text}>
          Unfortunately, there is nothing more on this page yet.
        </p>
      </div>
    </main>
  );
}
