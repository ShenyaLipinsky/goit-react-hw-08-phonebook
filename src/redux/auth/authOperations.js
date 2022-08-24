import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
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

export const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
