import React, { useContext } from "react";
import { TodoContext } from "../context/TodoProvider";
import filteredTodos from "../utils/filteredTodos.js";
import Todo from "./Todo";

const Todos = () => {
    const {
        state: { todos, filter },
    } = useContext(TodoContext);

    return (
        <div className="mt-6">
            {filteredTodos(filter, todos).map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default Todos;
