import { todos, visibilityFilter } from './todoListReducer'
import { createStore, combineReducers } from 'redux'
import React from 'react'
import { Provider, connect } from 'react-redux'
import ReactDOM from 'react-dom';
import { AddTodo } from './components/AddTodo';
import { Footer } from './components/Footer'
import { TodoList } from './components/TodoList'

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            )
        default:
            return todos;
    }
}



const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            })
        }
    }
}
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);



const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)



ReactDOM.render(
    <Provider store={createStore(todoApp)} >
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);
