import { todos, visibilityFilter } from './todoListReducer'
import { createStore, combineReducers } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom';
import { TodoList } from './components/TodoList';
import { AddTodo } from './components/AddTodo';
import { Footer } from './components/Footer'

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp)


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


let nextTodoId = 0;

const TodoApp = ({
    todos,
    visibilityFilter
}) => (
        <div>
            <AddTodo
                onAddClick={text =>
                    store.dispatch({
                        type: 'ADD_TODO',
                        id: nextTodoId += 1,
                        text
                    })
                }
            />
            <TodoList
                todos={
                    getVisibleTodos(
                        todos,
                        visibilityFilter
                    )
                }
                onTodoClick={id =>
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })}
            />
            <Footer
                visibilityFilter={visibilityFilter}
                onFilterClick={filter =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter
                    })
                }
            />
        </div>
    )


const render = () => {
    ReactDOM.render(
        <TodoApp
            {...store.getState()}
        />,
        document.getElementById('root')
    );

}

store.subscribe(render);
render();
