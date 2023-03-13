import { instance, setToken } from './http-client';

const ERROR_401_MESSAGE = 'You are not authorized. Log in first.';
const ERROR_500_MESSAGE = 'Internal server error.';

/*
  POST: /users/signup
  body: {name, email, password}
  resp: {user: {name, email}, token}
  201 - user created
  400 - user creation error
    {message?}
  500 - server error
*/
export const singup = async body => {
  try {
    console.log(body);
    const { data } = await instance.post('/users/signup', body);
    setToken(data.token);
    console.log('data', data);
    return data;
  } catch (error) {
    const {
      message: errorMessage,
      response: { status, message: responseMessage, keyValue } = {},
    } = error;
    console.log('error', error);
    switch (status) {
      case 400:
        throw new Error(
          responseMessage ||
            (keyValue?.email && 'Please try another email') ||
            'New user registration has failed'
        );
      case 500:
        throw new Error(ERROR_500_MESSAGE);
      default:
        throw new Error(
          responseMessage || errorMessage || 'New user registration has failed'
        );
    }
  }
};

/*
  POST: /users/login
  body: {email, password}
  resp: {user: {name, email}, token}
  200 - user is logged in
  400 - login error
    {}
*/

export const login = async body => {
  try {
    const { data } = await instance.post('/users/login', body);
    setToken(data.token);
    return data;
  } catch (error) {
    const {
      message: errorMessage,
      response: { status, message: responseMessage } = {},
    } = error;
    switch (status) {
      case 400:
        throw new Error('Unsuccessful login attempt. Wrong login or password.');
      case 500:
        throw new Error(`Unsuccessful login attempt. ${ERROR_500_MESSAGE}`);
      default:
        throw new Error(
          responseMessage || errorMessage || 'Unsuccessful login attempt.'
        );
    }
  }
};

/*
  POST: /users/logout
  body: {}
  resp: {}
  200 - the user is logged out
  401 - not authorized
  {message}
  500 - server error
*/

export const logout = async () => {
  try {
    await instance.post('/users/logout');
    setToken(null);
    return;
  } catch (error) {
    const {
      message: errorMessage,
      response: { status, message: responseMessage } = {},
    } = error;
    switch (status) {
      case 401:
        // setToken(null);
        return;
      case 500:
        throw new Error(ERROR_500_MESSAGE);
      default:
        throw new Error(
          responseMessage || errorMessage || 'Failed to log out.'
        );
    }
  }
};

/*
  GET: /users/current
  body: {}
  resp: {name, email}
  200
  401
  500
*/

export const current = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('users/current');
    return data;
  } catch (error) {
    const {
      message: errorMessage,
      data: { message: responseMessage, status },
    } = error;
    switch (status) {
      case 401:
        // setToken(null);
        throw new Error(ERROR_401_MESSAGE);
      case 500:
        throw new Error(ERROR_500_MESSAGE);
      default:
        throw new Error(
          responseMessage || errorMessage || 'Failed to get user info'
        );
    }
  }
};
