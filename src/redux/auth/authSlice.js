import { authOperations } from './authOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {},
  },
});

export default authSlice.reducer;

//------------------------------ SELECTORS ------------------------------//

const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIUserName = state => state.auth.user.name;

export const authSelectors = {
  getIUserName,
  getIsLoggedIn,
};
//------------------------------ OPERATIONS ------------------------------//
