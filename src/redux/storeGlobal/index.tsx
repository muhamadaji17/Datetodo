import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import LoginReducer from "../auth/reducer/authReducer";
import DashboardReducer from "@/redux/dashboard/reducer/Dashboard";
import rootSaga from "@/redux/sagaGlobal/saga";

const logger = createLogger();
const saga = createSagaMiddleware();
const reducer = combineReducers({
  // LoginReducer
  DashboardReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(logger)
      .concat(saga),
});
saga.run(rootSaga);

export default store;
