import { createSlice } from "@reduxjs/toolkit";

const trainingsSlice = createSlice({
  name: "trainings",
  initialState: {
    trainings: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalResults: 0,
    limit: 8,
  },
  reducers: {
    getTrainingsRequest: (state, { payload }) => {
      state.loading = true;
      state.error = null;
      if (payload?.page) {
        state.currentPage = payload.page;
      }
      if (payload?.limit) {
        state.limit = payload.limit;
      }
    },
    getTrainingsSuccess: (state, { payload }) => {
      state.loading = false;
      state.trainings = payload.data.data;
      state.totalResults = payload.results;
    },
    getTrainingsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    setLimit: (state, { payload }) => {
      state.limit = payload;
    },
  },
});

export const selectTrainingsState = (state) => state.trainings;

export const { getTrainingsRequest, getTrainingsSuccess, getTrainingsFailure } =
  trainingsSlice.actions;

export default trainingsSlice.reducer;
