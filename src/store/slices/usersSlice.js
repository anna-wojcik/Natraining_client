import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
    totalResults: 0,
  },
  reducers: {
    getUsersRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getUsersSuccess: (state, { payload }) => {
      state.loading = false;
      state.users = payload.data.data;
      state.totalResults = payload.results;
      state.error = null;
    },
    getUsersFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    updateUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateUserSuccess: (state, { payload }) => {
      state.loading = false;
      const updateUser = payload.data.data;
      const index = state.users.findIndex((u) => u._id === updateUser._id);
      if (index !== -1) {
        state.users[index] = updateUser;
      }
      state.error = null;
    },
    updateUserFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
} = usersSlice.actions;

export const selectUsersState = (state) => state.users;

export default usersSlice.reducer;
