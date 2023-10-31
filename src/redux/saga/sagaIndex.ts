import { all, takeEvery } from "redux-saga/effects";
import ActionTypeBootcamp from '@/redux/action/ActionType'
import {handleGetDateRange} from '@/redux/saga/sagaReducer'


function* watchAll() {
    yield all([
        takeEvery(ActionTypeBootcamp.REQ_GET_DATE_RANGE, handleGetDateRange),
    ]);
}

export default watchAll;