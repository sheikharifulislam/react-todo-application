import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoProvider";
import { added } from "../reducers/todo/actions.js";

const Form = () => {
    const [title, setTitle] = useState("");
    const { dispatch } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(title));
        setTitle("");
    };

    return (
        <form className="mt-6" onSubmit={handleSubmit}>
            <div className="flex items-center">
                <input
                    type="text"
                    className="flex-1 border border-solid border-gray-200 py-3 pl-4 focus:outline-none"
                    placeholder="Enter Your Todo Name"
                    id="name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    type="submit"
                    className="ml-2 rounded bg-cyan-600 py-3 px-6 text-white"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default Form;
