import { call, put, takeLatest } from "redux-saga/effects";
import {
  getCheckoutSessionRequest,
  getCheckoutSessionFailure,
  getBookingsRequest,
  getBookingsSuccess,
  getBookingsFailure,
} from "../slices/bookingsSlice";
import { fetchCheckoutSession, fetchBookings } from "../apiData/apiBookings";

function* handleGetCheckoutSession({ payload }) {
  try {
    const trainingId = payload;
    const responseData = yield call(fetchCheckoutSession, trainingId);

    if (responseData.status === "success" && responseData.session?.url) {
      window.location.href = responseData.session.url;
    }
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    yield put(getCheckoutSessionFailure(errorMessage));
  }
}

function* handleGetBookings() {
  try {
    const responseData = yield call(fetchBookings);

    if (responseData.status === "success") {
      yield put(getBookingsSuccess(responseData));
    }
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    yield put(getBookingsFailure(errorMessage));
  }
}

export function* bookingsSaga() {
  yield takeLatest(getCheckoutSessionRequest.type, handleGetCheckoutSession);
  yield takeLatest(getBookingsRequest.type, handleGetBookings);
}
