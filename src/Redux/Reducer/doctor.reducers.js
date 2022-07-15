import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    doctor : [],
    error: ''
}


export const DoctorReducers = (state = initalState, action) => {
    console.log(action);
    switch (action.type) {
        case ActionTypes.LOADING_MEDICINES : 
            return {
                ...state,
                isLoding : true,
                error : ''
            }
        case ActionTypes.GET_DOCTOR : 
            return {
                ...state,
                isLoding : false,
                doctor : action.payload,
                error : ''
            } 
            case ActionTypes.POST_DOCTOR : 
            return {
                ...state,
                isLoding : false,
                doctor : state.medicines.concat(action.payload),
                error : ''
            } 
        case ActionTypes.ERROR_MEDICINES : 
            return {
                ...state,
                isLoding : false,
                doctor : [],
                error : action.payload
            }
        default : 
            return state
    }
}