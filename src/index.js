import { todos, visibilityFilter } from './todoListReducer'
import { createStore, combineReducers } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom';
import { TodoList } from './components/TodoList'


const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp)

const FilterLink = ({
    filter,
    selectedFilter,
    children,
    onClick
}) => {

    if (filter === selectedFilter) {
        return <span> {children} </span>
    }
    return (
        // eslint-disable-next-line
        <a href="#"
            onClick={e => {
                e.preventDefault();
                onClick(filter);
            }}
        >
            {children}
        </a>
    )
}


const Footer = ({
    visibilityFilter,
    onFilterClick
}) => (
        <p>
            Show Todos:
            {' '}
            <FilterLink
                filter='SHOW_ALL'
                selectedFilter={visibilityFilter}
                onClick={onFilterClick}
            >
                All
    </FilterLink>
            {' '}
            <FilterLink
                filter='SHOW_ACTIVE'
                selectedFilter={visibilityFilter}
                onClick={onFilterClick}
            >
                Active
    </FilterLink>
            {' '}
            <FilterLink
                filter='SHOW_COMPLETED'
                selectedFilter={visibilityFilter}
                onClick={onFilterClick}
            >
                Completed
    </FilterLink>
        </p>
    )


const AddTodo = ({
    onAddClick
}) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node
            }
            } type="text" />
            <button onClick={() => {
                onAddClick(input.value)
                input.value = '';
            }} >
                Add Todo
                </button>
        </div>
    )
}

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
