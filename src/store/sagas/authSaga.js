import { call, put, takeLatest, delay } from "redux-saga/effects";
import { loginUser, logoutUser, signupUser, getMe } from "../apiData/authApi";
import { updateMe, updatePassword } from "../apiData/userApi";
import {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  signupRequest,
  signupSuccess,
  signupFailure,
  checkAuthRequest,
  checkAuthSuccess,
  checkAuthFailure,
  updateSettingsRequest,
  updateSettingsSuccess,
  updateSettingsFailure,
} from "../slices/authSlice";
import { setAlert, clearAlert } from "../slices/alertSlice";

function* handleLogin({ payload }) {
  try {
    const { email, password, navigate } = payload;
    const responseData = yield call(loginUser, email, password);

    if (responseData.status === "success") {
      yield put(loginSuccess(responseData));

      if (navigate) yield call(navigate, "/profile");
      yield put(
        setAlert({ message: "Logged in successfully", type: "success" }),
      );
      yield delay(3000);
      yield put(clearAlert());
    }
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    yield put(loginFailure(errorMessage));
    yield put(setAlert({ message: errorMessage, type: "error" }));
    yield delay(3000);
    yield put(clearAlert());
  }
}

function* handleLogout() {
  try {
    yield call(logoutUser);
    yield put(logoutSuccess());
    // window.location.href = "/login";
    yield put(
      setAlert({ message: "Logged out successfully", type: "success" }),
    );
    yield delay(3000);
    yield put(clearAlert());
  } catch (error) {
    console.log("Error while logging out:", error);
    yield put(setAlert({ message: "Error while logging out", type: "error" }));
    yield delay(3000);
    yield put(clearAlert());
  }
}

function* handleSignup({ payload }) {
  try {
    const { name, email, password, passwordConfirm, navigate } = payload;
    const responseData = yield call(
      signupUser,
      name,
      email,
      password,
      passwordConfirm,
    );
    if (responseData.status === "success") {
      yield put(signupSuccess(responseData));
      if (navigate) yield call(navigate, "/profile");
      yield put(
        setAlert({ message: "Signed up successfully", type: "success" }),
      );
      yield delay(3000);
      yield put(clearAlert());
    }
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    yield put(signupFailure(errorMessage));
    yield put(setAlert({ message: errorMessage, type: "error" }));
    yield delay(3000);
    yield put(clearAlert());
  }
}

function* handleCheckAuth() {
  try {
    const responseData = yield call(getMe);
    if (responseData.status === "success") {
      console.log("responseData:", responseData);
      yield put(checkAuthSuccess(responseData));
    }
  } catch (error) {
    console.log("Błąd sprawdzania autoryzacji:", error);
    yield put(checkAuthFailure());
  }
}

function* handleUpdateSettings({ payload }) {
  try {
    const { type, data, clearPasswordFields } = payload;
    let responseData;
    if (type === "password") {
      responseData = yield call(
        updatePassword,
        data.passwordCurrent,
        data.password,
        data.passwordConfirm,
      );
      if (clearPasswordFields) call(clearPasswordFields);
    } else {
      responseData = yield call(updateMe, data);
    }

    if (responseData.status === "success") {
      yield put(updateSettingsSuccess(responseData.data.user));
      yield put(
        setAlert({ message: "Settings updated successfully", type: "success" }),
      );
      yield delay(3000);
      yield put(clearAlert());
    }
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    yield put(updateSettingsFailure(errorMessage));
    yield put(setAlert({ message: errorMessage, type: "error" }));
    yield delay(3000);
    yield put(clearAlert());
  }
}

export function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(logoutRequest.type, handleLogout);
  yield takeLatest(signupRequest.type, handleSignup);
  yield takeLatest(checkAuthRequest.type, handleCheckAuth);
  yield takeLatest(updateSettingsRequest.type, handleUpdateSettings);
}
