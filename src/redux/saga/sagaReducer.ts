import { call, put } from "redux-saga/effects";
import {resGetDateRange} from '@/redux/action/ActionReducer'
import apiMethod from '@/api/index'

export function* handleGetDateRange(): any {
    try {
      const result = yield call(apiMethod.getDate);
      yield put(resGetDateRange(result.data));
    } catch (error) {
      yield put(resGetDateRange({ message: error, status: 404 }));
    }
  }