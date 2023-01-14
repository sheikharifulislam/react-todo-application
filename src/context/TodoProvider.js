import React, { createContext, useReducer } from "react";
import initialState from "../reducers/todo/initialState";
import todoReducer from "../reducers/todo/reducer";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;
