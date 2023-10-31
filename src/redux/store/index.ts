import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import dateTodo from '@/redux/reducer/index'

const reducer = combineReducers({
    dateTodo : dateTodo
})

export const store=configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})
