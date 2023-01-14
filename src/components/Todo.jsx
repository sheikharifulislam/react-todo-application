import React from "react";
import Check from "../icons/Check";
import Delete from "../icons/Delete";
import Edit from "../icons/Edit";

const Todo = ({ todo }) => {
    const { title, isCompletd } = todo;
    return (
        <div className="mb-1 flex rounded border border-solid border-gray-200 py-4 px-3">
            <div className="flex-1">
                <h1>{title}</h1>
            </div>
            <div className="flex space-x-2">
                <Check />
                <Edit />
                <Delete />
            </div>
        </div>
    );
};

export default Todo;
