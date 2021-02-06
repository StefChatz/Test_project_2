import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { map, isEmpty } from 'lodash';
import { getTodosByVisibilityFilter, getTodoList } from "../models/selectors";
import { VISIBILITY_FILTERS } from "../constants";

const TodoList = ({todoList}) => (
    <ul className="todo-list">
      {todoList && !isEmpty(todoList)
          ? map(todoList, (todo, index) => {
            console.log('todo', todo)
            
            return <Todo key={`todo-${todo.id} + ${index}`} todo={todo} />;
          })
          : `No todos, yay!`
      }
    </ul>
);

const mapStateToProps = state => {
  const todoList = getTodoList(state)
  return { todoList };

};

export default connect(mapStateToProps)(TodoList);
