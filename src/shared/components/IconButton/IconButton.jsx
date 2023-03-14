import PropTypes from 'prop-types';
import css from './IconButton.module.css';

export default function IconButton({ type = 'submit', className = '', ...props }) {
  return (
    <button className={`${css.button} ${className}`} type={type} {...props} />
  );
}

IconButton.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  className: PropTypes.string,
};
