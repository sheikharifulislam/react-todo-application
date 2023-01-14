import { ADDED, COMPLETED, DELETED, EDIT, FILTER } from "./actionsType.js";

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,
    };
};

export const completed = (isCompleted) => {
    return {
        type: COMPLETED,
        payload: isCompleted,
    };
};

export const deleted = () => {
    return {
        type: DELETED,
    };
};

export const edit = (todoText) => {
    return {
        type: EDIT,
        payload: todoText,
    };
};

export const filter = (value) => {
    return {
        type: FILTER,
        payload: value,
    };
};
