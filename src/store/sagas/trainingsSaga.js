import { call, put, takeLatest, delay } from "redux-saga/effects";
import {
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
} from "../slices/trainingsSlice";
import {
  fetchTrainings,
  fetchSingleTraining,
  createTraining,
  updateTraining,
  deleteTraining,
  fetchTrainerTrainings,
} from "../apiData/apiTrainings";
import { setAlert, clearAlert } from "../slices/alertSlice";

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

function* handleGetSingleTraining({ payload }) {
  try {
    const responseData = yield call(fetchSingleTraining, payload);
    if (responseData.status === "success") {
      yield put(getSingleTrainingSuccess(responseData));
    }
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    yield put(getSingleTrainingFailure(errorMessage));
  }
}

function* handleCreateTraining({ payload }) {
  try {
    const data = yield call(createTraining, payload);
    yield put(createTrainingSuccess(data));
    yield put(
      setAlert({
        message: "Trening added correctly!",
        type: "success",
      }),
    );
    yield delay(3000);
    yield put(clearAlert());
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    console.log(errorMessage);
    yield put(createTrainingFailure(errorMessage));
    yield put(setAlert({ message: errorMessage, type: "error" }));
  }
}

function* handleUpdateTraining({ payload }) {
  try {
    const data = yield call(updateTraining, payload);
    yield put(updateTrainingSuccess(data));
    yield put(
      setAlert({
        message: "Training updated successfully!",
        type: "success",
      }),
    );
    yield delay(4000);
    yield put(clearAlert());
  } catch (err) {
    yield put(
      updateTrainingFailure(err.response?.data?.message || "Update failed."),
    );
    yield put(
      setAlert({
        message: err.response?.data?.message || "Update failed.",
        type: "error",
      }),
    );
  }
}

function* handleDeleteTraining({ payload: id }) {
  try {
    yield call(deleteTraining, id);
    yield put(deleteTrainingSuccess(id));
    yield put(
      setAlert({
        message: "Training deleted from database.",
        type: "success",
      }),
    );
    yield delay(4000);
    yield put(clearAlert());
  } catch (err) {
    yield put(
      deleteTrainingFailure(err.response?.data?.message || "Delete failed."),
    );
    yield put(
      setAlert({
        message: err.response?.data?.message || "Delete failed.",
        type: "error",
      }),
    );
  }
}

function* handleGetTrainerTrainings({ payload }) {
  try {
    const data = yield call(fetchTrainerTrainings, payload);
    yield put(getTrainerTrainingsSuccess(data));
  } catch (err) {
    yield put(
      getTrainerTrainingsFailure(
        err.response?.data?.message || "Failed to load schedule.",
      ),
    );
  }
}

export function* trainingsSaga() {
  yield takeLatest(getTrainingsRequest.type, handleGetTrainings);
  yield takeLatest(getSingleTrainingRequest.type, handleGetSingleTraining);
  yield takeLatest(createTrainingRequest.type, handleCreateTraining);
  yield takeLatest(updateTrainingRequest.type, handleUpdateTraining);
  yield takeLatest(deleteTrainingRequest.type, handleDeleteTraining);
  yield takeLatest(getTrainerTrainingsRequest.type, handleGetTrainerTrainings);
}
