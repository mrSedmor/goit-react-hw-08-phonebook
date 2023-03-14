import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { Button, SpinnerButton, FormikTextField } from 'shared/components';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useUpdateContactMutation } from 'redux/contacts/contacts-api';
import css from './contact-edit-form.module.css';
import schema from './validation-schema';
import fields from './fields';

export default function ContactEditForm({
  className,
  contact,
  onSuccess,
  onCancel,
}) {
  const contacts = useSelector(selectContacts);

  const [updateContact, { isLoading: isUpdating }] = useUpdateContactMutation();
  const [updateRequest, setUpdateRequest] = useState(null);

  const handleUpdateContact = useCallback(
    (updatedContact, { resetForm }) => {
      const normalizedName = updatedContact.name.toLocaleLowerCase();

      if (
        contacts.find(
          ({ id, name }) =>
            name.toLocaleLowerCase() === normalizedName && id !== contact.id
        )
      ) {
        toast.error(`${updatedContact.name} is already in contacts.`);
        return;
      }

      const request = updateContact(updatedContact);
      setUpdateRequest(request);
      request
        .unwrap()
        .then(() => {
          toast.success('Contact has been updated');
          resetForm(updatedContact);
          onSuccess();
        })
        .catch(() => {
          toast.error('Failed to update contact');
        });
    },
    [contacts, contact, onSuccess, updateContact]
  );

  const handleCancel = useCallback(() => {
    if (isUpdating) {
      updateRequest?.abort();
    }

    onCancel();
  }, [isUpdating, onCancel, updateRequest]);

  return (
    <div className={css.wrapper}>
      <strong className={css.heading}>Edit contact</strong>
      <Formik
        initialValues={contact}
        validationSchema={schema}
        onSubmit={handleUpdateContact}
      >
        <Form className={className}>
          <FormikTextField autocomplete="off" {...fields.name} />
          <FormikTextField autocomplete="off" {...fields.number} />
          <div className={css.controls}>
            <SpinnerButton spinner={isUpdating} disabled={isUpdating}>
              Update contact
            </SpinnerButton>
            <Button type="reset" disabled={isUpdating}>
              Revert
            </Button>
            <Button type="button" onClick={handleCancel} data-align-right>
              Cancel
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

ContactEditForm.defaultProps = {
  onSuccess: () => null,
  onCancel: () => null,
};

ContactEditForm.propTypes = {
  className: PropTypes.string,
  onSuccess: PropTypes.func,
  onCancel: PropTypes.func,
  currentContact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
