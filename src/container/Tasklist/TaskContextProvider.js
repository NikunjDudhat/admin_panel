import React, { createContext, useReducer, useState } from 'react';
import { ThemeReducer } from './Reducer/theme.reducer';
import * as ActionType from './ActionType'


export const TaskContext = createContext();

const intVal = {
    Theme : 'light',
}

export const ThemeProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(ThemeReducer, intVal);
    
    const Toogle_Theme = (Theme) => {
        const newTheme = Theme === 'light' ? "dark" : 'light';
        dispatch({type: ActionType.TOOGLE_THEME, payload : newTheme})
    }

    return (
       <TaskContext.Provider value={{ ...state, Toogle_Theme  }}>
            {children}
       </TaskContext.Provider>
    );
}

export default TaskContext;