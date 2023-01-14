import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import { filtered } from "../reducers/todo/actions.js";

const Footer = () => {
    const {
        dispatch,
        state: { filter },
    } = useContext(TodoContext);
    return (
        <div className="mt-5 flex items-start rounded bg-[#eee] py-4 px-3">
            <div className="flex-1">
                <p>Filter By: </p>
            </div>
            <form className="flex items-center space-x-3 text-base">
                <div>
                    <input
                        type="radio"
                        className="mr-1"
                        name="filter"
                        id="all"
                        onClick={() => dispatch(filtered("all"))}
                        {...(filter === "all"
                            ? { defaultChecked: true }
                            : { defaultChecked: false })}
                    />
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input
                        type="radio"
                        className="mr-1"
                        name="filter"
                        id="completed"
                        onClick={() => dispatch(filtered("completed"))}
                        {...(filter === "completed"
                            ? { defaultChecked: true }
                            : { defaultChecked: false })}
                    />
                    <label htmlFor="completed">Completed</label>
                </div>
                <div>
                    <input
                        type="radio"
                        className="mr-1"
                        name="filter"
                        id="incompleted"
                        onClick={() => dispatch(filtered("inCompleted"))}
                        {...(filter === "inCompleted"
                            ? { defaultChecked: true }
                            : { defaultChecked: false })}
                    />
                    <label htmlFor="incompleted">Incompleted</label>
                </div>
            </form>
        </div>
    );
};

export default Footer;
