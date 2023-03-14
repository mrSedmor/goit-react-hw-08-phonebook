import { useCallback, useEffect } from 'react';
import useForm from 'shared/hooks/use-form';
import { TextField, Button } from 'shared/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthError } from 'redux/auth/auth-selectors';
import { clearError } from 'redux/auth/auth-slice';
import { toast } from 'react-toastify';
import { signup } from 'redux/auth/auth-operations';
import initialState from './initial-state';
import fields from './fields';
import css from './RegisterForm.module.css';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const singupUser = useCallback(
    data => {
      if (data.password !== data.confirmPassword) {
        toast.error('The password values are different.');
        return false;
      }
      dispatch(signup(data));
      return false;
    },
    [dispatch]
  );

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit: singupUser,
  });

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
