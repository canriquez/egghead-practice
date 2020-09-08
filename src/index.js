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
    children
}) => {

    if (filter === selectedFilter) {
        return <span> {children} </span>
    }
    return (
        // eslint-disable-next-line
        <a href="#"
            onClick={e => {
                e.preventDefault();
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                });
            }}
        >
            {children}
        </a>
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

class TodoApp extends React.Component {
    render() {
        const { todos, visibilityFilter } = this.props;
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        )
        return (
            <div>
                <input ref={
                    node => {
                        this.input = node
                    }
                } type="text" />
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId += 1,
                    });
                    this.input.value = '';
                }} >
                    Add Todo
                </button>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id =>
                        store.dispatch({
                            type: 'TOGGLE_TODO',
                            id
                        })}
                />
                <p>
                    Show Todos:
                    {' '}
                    <FilterLink
                        filter='SHOW_ALL'
                        selectedFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_ACTIVE'
                        selectedFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_COMPLETED'
                        selectedFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        )
    }
}


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
