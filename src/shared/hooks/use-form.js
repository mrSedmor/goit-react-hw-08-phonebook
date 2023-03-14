import { useState, useCallback } from 'react';

export default function useForm({ initialState, onSubmit }) {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;
    setState(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      if (onSubmit({ ...state })) {
        console.log('reset state');
        setState({ ...initialState });
      }
    },
    [state, onSubmit, initialState]
  );

  return { state, setState, handleChange, handleSubmit };
}
