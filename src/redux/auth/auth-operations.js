import { createAsyncThunk } from '@reduxjs/toolkit';

import * as authApi from 'shared/services/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, { rejectWithValue }) => {
    try {
      return await authApi.singup(data);
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      return await authApi.login(data);
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await authApi.logout();
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { token } = getState().auth;
      return await authApi.current(token);
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
  { condition: (_, { getState }) => Boolean(getState().auth.token) }
);
