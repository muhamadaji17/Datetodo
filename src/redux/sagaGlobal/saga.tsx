import { all, takeEvery } from "redux-saga/effects";
import ActionType from "../auth/action/ActionType";
import { handleLogin } from "../auth/saga/bootcampSaga";

function * watchAll(){
    yield all([
        takeEvery(ActionType.REQ_POST_LOGIN, handleLogin)
    ])
}

export default watchAll