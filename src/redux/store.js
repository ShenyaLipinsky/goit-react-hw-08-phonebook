import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../redux/auth/authSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi, filterReducer, filter } from './contactsSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filter.type]: filterReducer,
    [authSlice.name]: authSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);
