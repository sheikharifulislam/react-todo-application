import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";
import Check from "../icons/Check";
import Delete from "../icons/Delete";
import Edit from "../icons/Edit";
import { completed, deleted, edited } from "../reducers/todo/actions.js";

const Todo = ({ todo }) => {
    const { title, isCompleted, id } = todo;
    const { dispatch } = useContext(TodoContext);
    const [edit, setEdit] = useState(false);
    const [editText, setEditText] = useState("");

    const handleTodoUpdate = (e) => {
        e.preventDefault();
        dispatch(edited(id, editText));
        setEdit(false);
    };

    console.log(todo);

    return (
        <div className="mb-1 flex items-center rounded border border-solid border-gray-200 py-4 px-3">
            <div className="mr-2 flex-1">
                {edit ? (
                    <form onSubmit={handleTodoUpdate}>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="w-full border border-solid border-gray-300 py-2 pl-4 focus:outline-none"
                            defaultValue={title}
                            onChange={(e) => setEditText(e.target.value)}
                        />
                    </form>
                ) : (
                    <h1 className={`${isCompleted ? "line-through" : ""}`}>
                        {title}
                    </h1>
                )}
            </div>
            <div className="flex space-x-2">
                <Check onClick={() => dispatch(completed(id))} />
                <Edit onClick={() => setEdit(!edit)} />
                <Delete onClick={() => dispatch(deleted(id))} />
            </div>
        </div>
    );
};

export default Todo;
