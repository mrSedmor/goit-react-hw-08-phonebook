import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'shared/hooks/use-form';
import { TextField, Button } from 'shared/components';
import { login } from 'redux/auth/auth-operations';
import { selectAuthError } from 'redux/auth/auth-selectors';
import { clearError } from 'redux/auth/auth-slice';
import { toast } from 'react-toastify';
import initialState from './initial-state';
import fields from './fields';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

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
