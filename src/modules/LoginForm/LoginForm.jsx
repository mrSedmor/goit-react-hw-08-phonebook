import { useDispatch } from 'react-redux';
import useForm from 'shared/hooks/use-form';
import { TextField, Button } from 'shared/components';
import { login } from 'redux/auth/auth-operations';
import initialState from './initial-state';
import fields from './fields';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();
  const loginUser = data => {
    dispatch(login(data));
  };
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit: loginUser,
  });
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <TextField handleChange={handleChange} value={email} {...fields.email} />
      <TextField
        handleChange={handleChange}
        value={password}
        {...fields.password}
      />
      <Button className={css.button}>Login</Button>
    </form>
  );
}
