import { createSlice } from "@reduxjs/toolkit";

const trainingsSlice = createSlice({
  name: "trainings",
  initialState: {
    trainings: [],
    currentTraining: null,
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
    getSingleTrainingRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.currentTraining = null;
    },
    getSingleTrainingSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentTraining = payload.data.data;
    },
    getSingleTrainingFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    createTrainingRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createTrainingSuccess: (state, { payload }) => {
      state.loading = false;
      state.trainings.unshift(payload.data.data);
    },
    createTrainingFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    updateTrainingRequest: (state) => {
      state.loading = true;
    },
    updateTrainingSuccess: (state, { payload }) => {
      state.loading = false;
      const updated = payload.data?.data || payload.data || payload;
      const index = state.trainings.findIndex((t) => t?._id === updated?._id);
      if (index !== -1) state.trainings[index] = updated;
    },
    updateTrainingFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    deleteTrainingRequest: (state) => {
      state.loading = true;
    },
    deleteTrainingSuccess: (state, { payload: id }) => {
      state.loading = false;
      state.trainings = state.trainings.filter((t) => t?._id !== id);
      state.totalResults -= 1;
    },
    deleteTrainingFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    getTrainerTrainingsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTrainerTrainingsSuccess: (state, { payload }) => {
      state.loading = false;
      state.trainings = payload.data.data;
      state.totalResults = payload.results || payload.data.data.length;
    },
    getTrainerTrainingsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const selectTrainingsState = (state) => state.trainings;

export const {
  getTrainingsRequest,
  getTrainingsSuccess,
  getTrainingsFailure,
  getSingleTrainingRequest,
  getSingleTrainingSuccess,
  getSingleTrainingFailure,
  createTrainingRequest,
  createTrainingSuccess,
  createTrainingFailure,
  updateTrainingRequest,
  updateTrainingSuccess,
  updateTrainingFailure,
  deleteTrainingRequest,
  deleteTrainingSuccess,
  deleteTrainingFailure,
  getTrainerTrainingsRequest,
  getTrainerTrainingsSuccess,
  getTrainerTrainingsFailure,
} = trainingsSlice.actions;

export default trainingsSlice.reducer;
