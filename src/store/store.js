import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./slices/authSlice";
import alertReducer from "./slices/alertSlice";
import trainingsReducer from "./slices/trainingsSlice";
import { authSaga } from "./sagas/authSaga";
import { trainingsSaga } from "./sagas/trainingsSaga";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([authSaga(), trainingsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    trainings: trainingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
