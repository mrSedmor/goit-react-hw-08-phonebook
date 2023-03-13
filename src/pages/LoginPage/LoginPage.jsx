import { LoginForm } from 'modules';
// import css from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-title">Login page</h1>
        <LoginForm />
      </div>
    </main>
  );
}
