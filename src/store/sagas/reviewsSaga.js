import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
  getReviewsRequest,
  getReviewsSuccess,
  getReviewsFailure,
  updateReviewRequest,
  updateReviewSuccess,
  updateReviewFailure,
} from "../slices/reviewsSlice";
import { fetchAllReviews, updateReviewByAdmin } from "../apiData/apiReviews";
import { setAlert, clearAlert } from "../slices/alertSlice";

function* handleGetReviews({ payload }) {
  try {
    const responseData = yield call(fetchAllReviews, payload);
    if (responseData.status === "success") {
      yield put(getReviewsSuccess(responseData));
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to load reviews.";
    yield put(getReviewsFailure(errorMessage));
  }
}

function* handleUpdateReview({ payload }) {
  try {
    const responseData = yield call(updateReviewByAdmin, payload);
    if (responseData.status === "success") {
      yield put(updateReviewSuccess(responseData));

      yield put(
        setAlert({
          message: "Review updated successfully!",
          type: "success",
        }),
      );
      yield delay(4000);
      yield put(clearAlert());
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Failed to update review.";
    yield put(updateReviewFailure(errorMessage));
    yield put(setAlert({ message: errorMessage, type: "error" }));
  }
}

export function* reviewsSaga() {
  yield takeLatest(getReviewsRequest.type, handleGetReviews);
  yield takeLatest(updateReviewRequest.type, handleUpdateReview);
}
