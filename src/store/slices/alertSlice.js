import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    message: null,
    type: null, // 'success' or 'error'
  },
  reducers: {
    setAlert: (state, { payload }) => {
      state.message = payload.message;
      state.type = payload.type;
    },
    clearAlert: (state) => {
      state.message = null;
      state.type = null;
    },
  },
});

export const { setAlert, clearAlert } = alertSlice.actions;

const selectAlert = (state) => state.alert;

export const selectAlertMessage = (state) => selectAlert(state).message;
export const selectAlertType = (state) => selectAlert(state).type;

export default alertSlice.reducer;
