import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import { toast } from 'react-toastify';

import { Button, SpinnerButton, FormikTextField } from 'shared/components';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useAddContactMutation } from 'redux/contacts/contacts-api';
import css from './contact-form.module.css';
import schema from './validation-schema';
import initialValues from './initial-values';
import fields from './fields';

export default function ContactForm({ className }) {
  const contacts = useSelector(selectContacts);

  const [addContact, { isLoading: isAdding }] = useAddContactMutation();

  function handleAddContact(contact, { resetForm }) {
    const normalizedName = contact.name.toLocaleLowerCase();

    if (
      contacts.find(({ name }) => name.toLocaleLowerCase() === normalizedName)
    ) {
      toast.error(`${contact.name} is already in contacts.`);
      return;
    }

    addContact(contact)
      .unwrap()
      .then(() => {
        toast.success('New contact has been added');
        resetForm();
      })
      .catch(() => {
        toast.error('Failed to add contact.');
      });
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleAddContact}
      >
        <Form className={className}>
          <FormikTextField {...fields.name} />
          <FormikTextField {...fields.number} />
          <div className={css.controls}>
            <SpinnerButton spinner={isAdding} disabled={isAdding}>
              Add contact
            </SpinnerButton>
            <Button disabled={isAdding} type="reset">
              Reset form
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

ContactForm.propTypes = {
  className: PropTypes.string,
};
