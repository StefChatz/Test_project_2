import {map} from 'lodash';
import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = ({ todosList }) => (
  <ul className="todo-list">
    {todosList
      ? map(todosList?.byIds, (todo, index) => {
          return <Todo key={`todo-${todo}+${index}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);
const mapStateToProps = state => {
  const { visibilityFilter,  todosList} = state
  // const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todosList }
}



export default connect(mapStateToProps)(TodoList)