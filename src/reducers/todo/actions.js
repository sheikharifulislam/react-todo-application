import { ADDED, COMPLETED, DELETED, EDIT, FILTER } from "./actionsType.js";

export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,
    };
};

export const completed = (id) => {
    return {
        type: COMPLETED,
        payload: id,
    };
};

export const deleted = (id) => {
    return {
        type: DELETED,
        payload: id,
    };
};

export const edited = (id, todoText) => {
    return {
        type: EDIT,
        payload: {
            value: todoText,
            id: id,
        },
    };
};

export const filtered = (filterType) => {
    return {
        type: FILTER,
        payload: filterType,
    };
};
