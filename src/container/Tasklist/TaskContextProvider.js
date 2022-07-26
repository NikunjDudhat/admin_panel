import React, { createContext, useReducer, useState } from 'react';
import { ThemeReducer } from './Reducer/theme.reducer';
import * as ActionType from './ActionType'


export const TaskContext = createContext();

const intVal = {
    theme : 'light',
}

function TaskContextProvider({ children }) {
    
    const [state, dispatch] = useReducer(ThemeReducer, intVal);
    
    const Toogle_Theme = (theme) => {
        const newTheme = theme === 'light' ? "dark" : 'light';
        dispatch({type: ActionType.TOOGLE_THEME, payload : newTheme})
    }

    return (
       <TaskContext.Provider value={{ ...state, Toogle_Theme  }}>
            {children}
       </TaskContext.Provider>
    );
}

export default TaskContextProvider;