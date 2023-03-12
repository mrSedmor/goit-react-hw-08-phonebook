import PropTypes from 'prop-types';
import { useMemo } from 'react';
import getId from 'shared/services/counter';
import css from './TextField.module.css';

export default function TextField({ label, handleChange, ...props }) {
  const id = useMemo(() => getId(), []);
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>
      <input className={css.field} id={id} onChange={handleChange} {...props} />
    </div>
  );
}

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
