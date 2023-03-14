const fields = {
  name: {
    name: 'name',
    type: 'text',
    required: true,
    label: 'User name',
    placeholder: 'John Smith',
  },
  email: {
    name: 'email',
    type: 'email',
    required: true,
    label: 'User email',
    placeholder: 'john.smith@gmail.com',
  },
  password: {
    name: 'password',
    type: 'password',
    required: true,
    label: 'User password',
    placeholder: '*******',
  },
  confirmPassword: {
    name: 'confirmPassword',
    type: 'password',
    required: true,
    label: 'Confirm password',
    placeholder: '*******',
  },
};
export default fields;
