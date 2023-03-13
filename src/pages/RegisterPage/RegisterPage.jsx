import { RegisterForm } from 'modules';
// import css from './RegisterPage.module.css';

export default function RegisterPage() {
  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-title">Register your account</h1>
        <RegisterForm />
      </div>
    </main>
  );
}
