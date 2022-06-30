import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { RootRedux } from "./Reducer/combineReducers";



export const countorStore = () => {
    let store = createStore(RootRedux, applyMiddleware(thunk))

    return store;
}