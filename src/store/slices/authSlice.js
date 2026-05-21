import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    logoutLoading: false,
    error: null,
    isAuthenticated: false,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data.user;
      state.isAuthenticated = true;
    },
    loginFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    logoutRequest: (state) => {
      state.logoutLoading = true;
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.logoutLoading = false;
    },
    clearError: (state) => {
      state.error = null;
    },
    signupRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    signupSuccess: (state, {payload}) => {
      state.loading = false;
      state.user = payload.data.user;
      state.isAuthenticated = true;
    },
    signupFailure: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    }
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  clearError,
  signupRequest,
  signupSuccess,
  signupFailure,
} = authSlice.actions;

const selectAuthState = (state) => state.auth;

export const selectUser = state  => selectAuthState(state).user;
export const selectLoading = state => selectAuthState(state).loading;
export const selectLogoutLoading = state => selectAuthState(state).logoutLoading;
export const selectError = state => selectAuthState(state).error;
export const selectIsAuthenticated = state => selectAuthState(state).isAuthenticated;

export default authSlice.reducer;
