import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './auth/auth-slice';
import { contactsApi } from './contacts/contacts-api';
import { filterSlice } from './contacts/filter-slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    [authSlice.name]: persistedAuthReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
