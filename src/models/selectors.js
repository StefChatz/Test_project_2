import { filter } from 'lodash';


import { VISIBILITY_FILTERS } from "../constants";

export const getTodosState = store => store.todosList;

export const getTodoList = store => getTodosState(store)?.byIds || [];

export const getTodoById = (store, id) =>
    getTodosState(store) ? { ...getTodosState(store)?.byIds[id], id } : {};

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodoList(store);
    
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return filter(allTodos,todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return filter(allTodos,todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};
