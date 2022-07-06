import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    medicines : [],
    error: ''
}


export const MedicineReducers = (state = initalState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.LOADING_MEDICINES : 
            return {
                ...state,
                isLoding : true,
                medicines : [],
                error : ''
            }
        case ActionTypes.GET_MEDICINE : 
            return {
                ...state,
                isLoding : false,
                medicines : action.payload,
                error : ''
            }
        case ActionTypes.ERROR_MEDICINES : 
            return {
                ...state,
                isLoding : false,
                medicines : [],
                error : action.payload
            }
        default : 
            return state
    }
}