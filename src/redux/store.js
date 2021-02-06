import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todos';
import visibilityFilter from './reducers/visibilityFilter';

export default configureStore({
    reducer: {
        todoReducer,
        todosList: todoReducer,
        visibilityFilter
    },
});