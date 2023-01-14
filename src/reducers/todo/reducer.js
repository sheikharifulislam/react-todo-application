import shortid from "shortid";
import { ADDED, COMPLETED } from "./actionsType.js";
import initialState from "./initialState";
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDED:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: shortid.generate(),
                        title: action.payload,
                        isCompleted: false,
                    },
                ],
            };

        case COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        todo.isCompleted = !todo.isCompleted;
                    }

                    return todo;
                }),
            };

        default:
            return state;
    }
};

export default todoReducer;
