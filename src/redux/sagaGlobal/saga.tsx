import { all, takeEvery } from "redux-saga/effects";
import ActionType from "../dashboard/action/ActionType";
import { handleGetFilm } from "../dashboard/saga/DashboardSaga";

function* watchAll() {
  yield all([takeEvery(ActionType.REQ_GET_FILM, handleGetFilm)]);
}

export default watchAll;
