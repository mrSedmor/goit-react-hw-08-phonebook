import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useDeleteContactMutation } from 'redux/contacts/contacts-api';
import { toast } from 'react-toastify';
import { IconButton, Modal } from 'shared/components';
import { ContactEditForm } from 'modules';
import { FaEdit, FaTrash } from 'react-icons/fa';
import css from './contact-item.module.css';

export default function ContactItem({ id, name, number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);
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
      <IconButton type="button" onClick={showModal}>
        <FaEdit />
      </IconButton>
      <IconButton type="button" disabled={isDeleting} onClick={handleDelete}>
        <FaTrash />
      </IconButton>

      {isModalOpen && (
        <Modal onClose={hideModal}>
          <ContactEditForm
            contact={{ id, name, number }}
            onSuccess={hideModal}
            onCancel={hideModal}
          />
        </Modal>
      )}
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
