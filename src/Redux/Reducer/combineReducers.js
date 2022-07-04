import { combineReducers } from "redux";
import { CounterReducer } from "./counter.reducer";
import { MedicineReducers } from "./medicine.reducers";


export const RootRedux = combineReducers({
    count : CounterReducer,
    medicine : MedicineReducers
})