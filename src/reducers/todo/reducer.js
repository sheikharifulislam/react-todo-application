import shortid from "shortid";
import { ADDED } from "./actionsType.js";
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

        default:
            return state;
    }
};

export default todoReducer;
