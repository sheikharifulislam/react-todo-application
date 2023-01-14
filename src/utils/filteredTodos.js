const filteredTodos = (filter, todos) => {
    switch (filter) {
        case "completed":
            return todos.filter((todo) => todo.isCompleted === true);

        case "inCompleted":
            return todos.filter((todo) => todo.isCompleted !== true);

        default:
            return todos;
    }
};

export default filteredTodos;
