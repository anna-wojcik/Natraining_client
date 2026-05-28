import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import authReducer from "./slices/authSlice";
import alertReducer from "./slices/alertSlice";
import trainingsReducer from "./slices/trainingsSlice";
import bookingsReducer from "./slices/bookingsSlice";
import usersReducer from "./slices/usersSlice";
import reviewsReducer from "./slices/reviewsSlice";
import { authSaga } from "./sagas/authSaga";
import { trainingsSaga } from "./sagas/trainingsSaga";
import { bookingsSaga } from "./sagas/bookingsSaga";
import { usersSaga } from "./sagas/usersSaga";
import { all } from "redux-saga/effects";
import { reviewsSaga } from "./sagas/reviewsSaga";

function* rootSaga() {
  yield all([
    authSaga(),
    trainingsSaga(),
    bookingsSaga(),
    usersSaga(),
    reviewsSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
    trainings: trainingsReducer,
    bookings: bookingsReducer,
    users: usersReducer,
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
