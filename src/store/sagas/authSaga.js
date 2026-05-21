import { call, put, takeLatest } from "redux-saga/effects";
import { loginUser, logoutUser, signupUser, getMe } from "../apiData/authApi";
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
} from "../slices/authSlice";

function* handleLogin({ payload }) {
  try {
    const { email, password, navigate } = payload;
    const responseData = yield call(loginUser, email, password);

    if (responseData.status === "success") {
      yield put(loginSuccess(responseData));

      if (navigate) yield call(navigate, "/profile");
    }
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    yield put(loginFailure(errorMessage));
  }
}

function* handleLogout() {
  try {
    yield call(logoutUser);
    yield put(logoutSuccess());
    window.location.href = "/login";
  } catch (error) {
    console.error("Błąd wylogowania:", error);
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
    }
  } catch (error) {
    const errorMessage =
      error.response.data.message ||
      "Something went wrong. Please try again later.";
    yield put(signupFailure(errorMessage));
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

export function* authSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
  yield takeLatest(logoutRequest.type, handleLogout);
  yield takeLatest(signupRequest.type, handleSignup);
  yield takeLatest(checkAuthRequest.type, handleCheckAuth);
}
