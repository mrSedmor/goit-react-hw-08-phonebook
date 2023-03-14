import PropTypes from 'prop-types';
import { ThreeDots } from 'react-loader-spinner';
import { Button } from '../';
import css from './SpinnerButton.module.css';

export default function SpinnerButton({ spinner = false, children, ...props }) {
  return (
    <Button {...props}>
      <span className={css.wrapper}>
        {children}
        <ThreeDots
          visible={spinner}
          height="12"
          wrapperClass={css.spinner}
          color="#000000"
        />
      </span>
    </Button>
  );
}

SpinnerButton.propTypes = {
  spinner: PropTypes.bool,
};
