import * as ActionType from '../ActionType'

const initialState = {
    count : 0
}

export const CounterReducer = (state= initialState, action) => {
    switch(action.type){
        case ActionType.INCREMENT : 
            return {
                ...state,
                count : state.count + 1
            }
        case ActionType.DECREMENT : 
            return {
                ...state,
                count : state.count - 1
            }
        default : 
            return state;
    }

}