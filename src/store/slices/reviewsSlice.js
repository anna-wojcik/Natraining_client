import { createSlice } from "@reduxjs/toolkit";

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    loading: false,
    error: null,
    totalResults: 0,
  },
  reducers: {
    getReviewsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    getReviewsSuccess: (state, { payload }) => {
      state.loading = false;
      state.reviews = payload.data.data;
      state.totalResults = payload.results;
      state.error = null;
    },
    getReviewsFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    updateReviewRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateReviewSuccess: (state, { payload }) => {
      state.loading = false;
      const updatedReview = payload.data.data;

      const index = state.reviews.findIndex((r) => r._id === updatedReview._id);
      if (index !== -1) {
        state.reviews[index] = updatedReview;
      }
      state.error = null;
    },
    updateReviewFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {
  getReviewsRequest,
  getReviewsSuccess,
  getReviewsFailure,
  updateReviewRequest,
  updateReviewSuccess,
  updateReviewFailure,
} = reviewsSlice.actions;

export const selectReviewsState = (state) => state.reviews;
export default reviewsSlice.reducer;
