/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

/*
 * Users and token information is fetched from local storage on App load
 */

const initialState = {
  currentUser: null,
  isUserAuthenticating: true, // app looks for user token and username on refresh
  isUserAuthenticationError: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    authenticateUser: state => {
      state.isUserAuthenticating = true;
      state.isUserAuthenticationError = false;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isUserAuthenticating = false;
    },
    authenticateUserError: state => {
      state.isUserAuthenticating = false;
      state.currentUser = null;
      state.isUserAuthenticationError = true;
    },
    fetchAuthData: state => {
      state.currentUser = null;
      state.isUserAuthenticating = true;
    },
    fetchUserError: state => {
      state.currentUser = null;
      state.isUserAuthenticating = false; // app looks for user on refresh
      state.isUserAuthenticationError = false; // user didnt authenticated, local store was searched
    },
    saveAuthData: () => {},
    logOut: () => {},
  },
});

export const {
  fetchAuthData,
  authenticateUser,
  setCurrentUser,
  authenticateUserError,
  fetchUserError,
  saveAuthData,
  logOut,
} = loginSlice.actions;

export default loginSlice.reducer;
