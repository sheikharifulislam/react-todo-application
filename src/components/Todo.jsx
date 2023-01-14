import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import Check from "../icons/Check";
import Delete from "../icons/Delete";
import Edit from "../icons/Edit";
import { completed } from "../reducers/todo/actions.js";

const Todo = ({ todo }) => {
    const { title, isCompleted, id } = todo;
    const { dispatch } = useContext(TodoContext);

    return (
        <div className="mb-1 flex rounded border border-solid border-gray-200 py-4 px-3">
            <div className="flex-1">
                <h1 className={`${isCompleted ? "line-through" : ""}`}>
                    {title}
                </h1>
            </div>
            <div className="flex space-x-2">
                <Check onClick={() => dispatch(completed(id))} />
                <Edit />
                <Delete />
            </div>
        </div>
    );
};

export default Todo;
