import { Filter, ContactList, StatusInfo } from 'modules';
import { ContactForm } from 'modules';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <main className="page-content">
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm className={css.contactForm} />

        <h2 className={css.subtitle}>Contacts</h2>
        <Filter />
        <StatusInfo />
        <ContactList />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          className="toast"
        />
      </div>
    </main>
  );
}
