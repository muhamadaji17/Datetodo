import { call, put } from "redux-saga/effects";
import apiMethod from "@/api/dashboard";
import { resGetFilm } from "../action/ActionReducer";

export function* handleGetFilm(): any {
  try {
    const result = yield call(apiMethod.Film);
    // console.log('sagaget',result)
    yield put(resGetFilm(result));
  } catch (error) {
    yield put(resGetFilm({ message: error, status: 404 }));
  }
}
