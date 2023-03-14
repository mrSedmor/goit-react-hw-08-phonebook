const fields = {
  name: {
    name: 'name',
    type: 'text',
    required: true,
    label: 'Name',
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    placeholder: 'Rosie Simpson',
  },
  number: {
    name: 'number',
    type: 'tel',
    required: true,
    label: 'Number',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    placeholder: '459-12-56',
  },
};

export default fields;
