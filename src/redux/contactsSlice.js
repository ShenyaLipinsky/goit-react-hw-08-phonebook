import { createReducer, createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const initialState = {
  filter: '',
};

const contactsSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { filter } = contactsSlice.actions;
export const filterReducer = createReducer('', {
  [filter.type]: (_state, { payload }) => payload,
});
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  // add refetch, because after logout current user and login on other user, contacts does'nt refetching
  // refetchOnMountOrArgChange: true,
  // --------------------------------------------------------------------------------------------------
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: async (headers, { getState }) => {
      let token = await getState().auth.token;
      if (token !== axios.defaults.headers.authorization) {
        headers.set(
          'authorization',
          // axios.defaults.headers.authorization
          token
        );
      }
      return headers;
    },
  }),

  tagTypes: ['Contacts', 'authorization'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      method: 'GET',
      providesTags: ['Contacts', 'authorization'],
    }),
    addContact: builder.mutation({
      query: values => ({
        url: `/contacts`,
        method: 'POST',
        body: values,
      }),
      invalidatesTags: ['Contacts'],
    }),
    removeContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useRemoveContactMutation,
} = contactsApi;

export const getFilter = state => state[filter];
