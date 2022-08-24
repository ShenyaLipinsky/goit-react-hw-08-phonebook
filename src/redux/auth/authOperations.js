import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const notiflixOptions = Notiflix.Notify.init({
  width: '400px',
  position: 'top-right',
  distance: '50px',
  borderRadius: '10px',
  clickToClose: true,
  useIcon: false,
  fontSize: '23px',
});

let token = {
  set(token) {
    axios.defaults.headers.authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.authorization = '';
  },
};
const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      // console.log(error.response.data.message);
      if (error.response.data.message !== undefined) {
        Notiflix.Notify.failure(
          `${error.response.data.message}`,
          notiflixOptions
        );
        return thunkApi.rejectWithValue();
      }
      Notiflix.Notify.failure(`${error.message}`, notiflixOptions);
      return thunkApi.rejectWithValue();
    }
  }
);
const logIn = createAsyncThunk('auth/login', async (credentials, thunkApi) => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);

    return data;
  } catch (error) {
    // console.log(error.message);
    Notiflix.Notify.failure(`${error.message}`, notiflixOptions);
    return thunkApi.rejectWithValue();
  }
});
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const savedToken = state.auth.token;
    if (savedToken === null) {
      return thunkApi.rejectWithValue();
    }
    token.set(savedToken);
    try {
      const response = await axios.get('users/current');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');

    token.unset();
    return;
  } catch (error) {
    // console.log(error);
    Notiflix.Notify.failure(`${error.message}`, notiflixOptions);
  }
});

// const fetchCurrentUserContacts = createAsyncThunk(
//   'auth/getContacts',
//   async (_, thunkApi) => {
//     const state = thunkApi.getState();
//     const savedToken = state.auth.token;
//     if (savedToken === null) {
//       return thunkApi.rejectWithValue();
//     }
//     token.set(savedToken);
//     try {
//       const response = await axios.get('contacts');
//       return response.data.payload;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
  // fetchCurrentUserContacts,
};
