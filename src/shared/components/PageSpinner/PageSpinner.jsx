import css from './PageSpinner.module.css';

export default function PageSpinner({ text }) {
  return <p className={css.pageSpinner}>{text}</p>;
}
