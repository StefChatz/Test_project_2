import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter, getTodos, getTodoList } from "../redux/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const TodoList = ({ todos }) => (
    <ul className="todo-list">
      {todos && todos.length
          ? todos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
          : "No todos, yay!"}
        {console.log({todos})}
    </ul>

);

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodoList(state);
  // const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };

};

export default connect(mapStateToProps)(TodoList);
