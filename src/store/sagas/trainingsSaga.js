import { call, put, takeLatest } from "redux-saga/effects";
import {
  getTrainingsRequest,
  getTrainingsSuccess,
  getTrainingsFailure,
} from "../slices/trainingsSlice";
import { fetchTrainings } from "../apiData/apiTrainings";

function* handleGetTrainings({ payload }) {
  try {
    const page = payload?.page || 1;
    const limit = payload?.limit || 8;

    const responseData = yield call(fetchTrainings, page, limit);
    if (responseData.status === "success") {
      yield put(getTrainingsSuccess(responseData));
    }
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    yield put(getTrainingsFailure(errorMessage));
  }
}

export function* trainingsSaga() {
  yield takeLatest(getTrainingsRequest.type, handleGetTrainings);
}
