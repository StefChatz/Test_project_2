import React from "react";
import AddTodo from "./views/AddTodo";
import TodoList from "./views/TodoList";
import VisibilityFilters from "./views/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
        </div>
    );
}
