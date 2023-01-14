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
            {todos.length >= 1 ? (
                filteredTodos(filter, todos).map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))
            ) : (
                <h1 className="text-center font-serif text-[32px]">
                    Not Todos Found
                </h1>
            )}
        </div>
    );
};

export default Todos;
