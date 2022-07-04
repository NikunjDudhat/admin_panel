import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    medicines : [],
    error: ''
}


export const MedicineReducers = (state = initalState, action) => {
    console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.GET_MEDICINE : 
            return {
                ...state,
                isLoding : false,
                medicines : action.payload,
                error : ''
            }
        default : 
            return state
    }
}