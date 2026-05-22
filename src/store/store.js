import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./slices/authSlice";
import alertReducer from "./slices/alertSlice";
import { authSaga } from "./sagas/authSaga";
import { all } from "redux-saga/effects";

// Łączymy wszystkie sagi
function* rootSaga() {
  yield all([authSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
