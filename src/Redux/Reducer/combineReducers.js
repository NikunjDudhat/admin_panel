import { combineReducers } from "redux";
import { Reducer } from "./reducer";


export const RootRedux = combineReducers({
    count : Reducer
})