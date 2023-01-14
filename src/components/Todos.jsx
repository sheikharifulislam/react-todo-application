import React from "react";
import Todo from "./Todo";

const Todos = () => {
    return (
        <div className="mt-6">
            {new Array(2).fill(0).map((item) => (
                <Todo />
            ))}
        </div>
    );
};

export default Todos;
