import PropTypes from 'prop-types';
import css from './Button.module.css';

export default function Button({ type = 'submit', className = '', ...props }) {
  return (
    <button className={`${css.button} ${className}`} type={type} {...props} />
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  className: PropTypes.string,
};
