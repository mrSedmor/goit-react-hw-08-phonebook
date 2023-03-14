import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { Field, ErrorMessage } from 'formik';
import getId from 'shared/services/counter';
import css from './FormikTextField.module.css';

export default function FormikTextField({ label, ...props }) {
  const id = useMemo(() => getId(), []);
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor={id}>
        {label}
      </label>
      <Field className={css.field} id={id} {...props} />
      <ErrorMessage name={props.name} component="p" className={css.error} />
    </div>
  );
}

FormikTextField.propTypes = {
  label: PropTypes.string.isRequired,
};
