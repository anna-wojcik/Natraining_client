import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    bookings: [],
    loading: false,
    error: null,
  },
  reducers: {
    getBookingsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getBookingsSuccess: (state, { payload }) => {
      state.loading = false;
      state.bookings = payload;
    },
    getBookingsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    getCheckoutSessionRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCheckoutSessionFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  getBookingsRequest,
  getBookingsSuccess,
  getBookingsFailure,
  getCheckoutSessionRequest,
  getCheckoutSessionFailure,
} = bookingsSlice.actions;

export const selectBookingsState = (state) => state.bookings;

export default bookingsSlice.reducer;
