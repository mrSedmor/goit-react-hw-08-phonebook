import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contacts-api';
import { toast } from 'react-toastify';
import css from './contact-item.module.css';

export default function ContactItem({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const handleDelete = useCallback(() => {
    deleteContact(id)
      .unwrap()
      .catch(() => {
        toast.error(`Failed to delete contact: ${name}`);
      });
  }, [deleteContact, id, name]);

  return (
    <li className={css.item}>
      <span className={css.content}>
        {name}: {number}
      </span>
      <button
        className="btn"
        type="button"
        disabled={isDeleting}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
