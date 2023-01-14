import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import Todo from "./Todo";

const Todos = () => {
    const {
        state: { todos },
    } = useContext(TodoContext);
    return (
        <div className="mt-6">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default Todos;
