import { todos, visibilityFilter } from './todoListReducer'
import { createStore, combineReducers } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom';
import { AddTodo } from './components/AddTodo';
import { Footer } from './components/Footer'
import { VisibleTodoList } from './components/VisibleTodoList'

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const TodoApp = ({ store }) => (
    <div>
        <AddTodo store={store} />
        <VisibleTodoList store={store} />
        <Footer store={store} />
    </div>
)


const store = createStore(todoApp)


ReactDOM.render(
    <TodoApp store={store} />,
    document.getElementById('root')
);
