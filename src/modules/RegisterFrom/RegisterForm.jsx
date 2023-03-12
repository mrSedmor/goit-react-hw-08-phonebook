import useForm from 'shared/hooks/use-form';
import { TextField, Button } from 'shared/components';
import initialState from './initial-state';
import fields from './fields';
import css from './RegisterForm.module.css';

export default function ResiterForm() {
  const { state, handleChange, handleSubmit } = useForm(initialState);
  const { name, email, password, confirmPassword } = state;
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField handleChange={handleChange} value={name} {...fields.name} />
      <TextField handleChange={handleChange} value={email} {...fields.email} />
      <TextField
        handleChange={handleChange}
        value={password}
        {...fields.password}
      />
      <TextField
        handleChange={handleChange}
        value={confirmPassword}
        {...fields.confirmPassword}
      />
      <Button className={css.button}>Register</Button>
    </form>
  );
}
