import { call, put, takeLatest } from "redux-saga/effects";
import {
  getCheckoutSessionRequest,
  getCheckoutSessionFailure,
} from "../slices/bookingsSlice";
import { fetchCheckoutSession } from "../apiData/apiBookings";

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

export function* bookingsSaga() {
  yield takeLatest(getCheckoutSessionRequest.type, handleGetCheckoutSession);
}
