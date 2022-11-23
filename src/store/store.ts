import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import {usersReducer} from "./reducers/usersReducer";
import {todoReducer} from "./reducers/todoReducer";
import {profileReducer} from "./reducers/profileReducer";

const reducers = combineReducers({
    profile: profileReducer,
    users: usersReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof reducers>

export const store = configureStore({
    enhancers: undefined,
    middleware: [thunkMiddleware],
    preloadedState: undefined,
    reducer: reducers,
})
