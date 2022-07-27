import * as ActionType from '../ActionType'


export const ThemeReducer = (state, action) => {
    switch (action.type) {
        case ActionType.TOOGLE_THEME : 
            return {
                ...state,
                Theme : action.payload
            }
            
        default :
            return state;    
    }
}