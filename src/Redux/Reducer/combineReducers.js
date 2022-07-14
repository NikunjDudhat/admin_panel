import { combineReducers } from "redux";
import { doctor } from "../Action/doctor.action";
import { CounterReducer } from "./counter.reducer";
import { DoctorReducers } from "./doctor.reducers";
import { MedicineReducers } from "./medicine.reducers";


export const RootRedux = combineReducers({
    count : CounterReducer,
    medicine : MedicineReducers,
    doctor : DoctorReducers
})