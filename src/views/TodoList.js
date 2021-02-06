import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { map, isEmpty } from 'lodash';
import { getTodosByVisibilityFilter } from "../models/selectors";

const TodoList = ({todoList}) => (
    <ul className="todo-list">
      {todoList && !isEmpty(todoList)
          ? map(todoList, (todo, index) => {
            return <Todo key={`todo-${todo.id} + ${index}`} todo={todo} />;
          })
          : `No todos, yay!`
      }
    </ul>
);

const mapStateToProps = state => {
  const filter = state?.visibilityFilter
  const todoList = getTodosByVisibilityFilter(state, filter)
  return { todoList };

};

export default connect(mapStateToProps)(TodoList);
