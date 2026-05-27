import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
} from "../slices/usersSlice";
import { setAlert, clearAlert } from "../slices/alertSlice";

import { fetchUsers, updateUserDataByAdmin } from "../apiData/apiUsers";

function* handleGetUsers({ payload }) {
  try {
    // payload = {page, limit}
    const responseData = yield call(fetchUsers, payload);
    if (responseData.status === "success") {
      yield put(getUsersSuccess(responseData));
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong. Please try again later.";
    yield put(getUsersFailure(errorMessage));
  }
}

function* handleUpdateUser({ payload }) {
  try {
    // payload = { id, role, active }
    const responseData = yield call(updateUserDataByAdmin, payload);

    if (responseData.status === "success") {
      yield put(updateUserSuccess(responseData));
      yield put(
        setAlert({
          message: "User data updated successfully!",
          type: "success",
        }),
      );
      yield delay(3000);
      yield put(clearAlert());
    }
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      "Something went wrong. Please try again later.";
    yield put(updateUserFailure(errorMessage));
    yield put(
      setAlert({
        message: "Failed to update user: ${errorMessage}",
        type: "error",
      }),
    );
    yield delay(3000);
    yield put(clearAlert());
  }
}

export function* usersSaga() {
  yield takeLatest(getUsersRequest.type, handleGetUsers);
  yield takeLatest(updateUserRequest.type, handleUpdateUser);
}
