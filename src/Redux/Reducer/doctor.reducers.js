import * as ActionTypes from '../ActionType'

const initalState = {
    isLoding : false,
    doctor : [],
    error: ''
}


export const DoctorReducers = (state = initalState, action) => {
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
                doctor : state.doctor.concat(action.payload),
                error : ''
            } 
        case ActionTypes.DELETE_DOCTOR : 
            return {
                ...state,
                isLoding : false,
                doctor : state.doctor.filter((d, i ) => d.id !== action.payload),
                error : ''
            } 
        case ActionTypes.UPDATE_DOCTOR : 
            return {
                ...state,
                isLoding : false,
                doctor : state.doctor.map((u) => {
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
                doctor : [],
                error : action.payload
            }
        default : 
            return state
    }
}