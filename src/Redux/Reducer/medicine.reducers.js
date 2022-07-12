import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    medicines : [],
    error: ''
}


export const MedicineReducers = (state = initalState, action) => {
    switch (action.type) {
        case ActionTypes.LOADING_MEDICINES : 
            return {
                ...state,
                isLoding : true,
                error : ''
            }
        case ActionTypes.GET_MEDICINE : 
            return {
                ...state,
                isLoding : false,
                medicines : action.payload,
                error : ''
            }
        case ActionTypes.POST_MEDICINES : 
            return {
                ...state,
                isLoding : false,
                medicines : state.medicines.concat(action.payload),
                error : ''
            }
        case ActionTypes.DELETE_MEDICINES : 
            return {
                ...state,
                isLoding : false,
                medicines : state.medicines.filter((d, i ) => d.id !== action.payload),
                error : ''
            }
        case ActionTypes.UPDATE_MEDICINES : 
            return {
                ...state,
                isLoding : false,
                medicines : state.medicines.map((u) => {
                    if( u.id === action.payload.id) {
                        return action.payload
                    } else {
                        return u ;
                    }
                }),
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