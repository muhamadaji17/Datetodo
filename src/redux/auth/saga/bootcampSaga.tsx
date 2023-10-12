import apiMethod from "@/api/auth"
import {call, put} from 'redux-saga/effects'
import { RES_LOGIN } from "../action/ActionReducer"


export function * handleLogin(action:any):any{
    try {
        const result = yield call(apiMethod.Login, action.payload)
        yield put(RES_LOGIN(result.data))
    } catch (error:any) {
        yield put(RES_LOGIN({message: error, status: 400}))
        
    }
}