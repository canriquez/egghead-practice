import { todos, visibilityFilter } from './todoListReducer'
import { createStore, combineReducers } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom';


const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp)
let nextTodoId = 0;

class TodoApp extends React.Component {
    render() {
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
                <ul>
                    {this.props.todos.map(todo =>
                        <li key={todo.id}
                            onClick={() => {
                                store.dispatch({
                                    type: 'TOGGLE_TODO',
                                    id: todo.id
                                })
                            }}
                            style={
                                {
                                    textDecoration: todo.completed ?
                                        'line-through' :
                                        'none',
                                    color: todo.completed ?
                                        'gray' :
                                        'blue'
                                }
                            }
                        >
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


const render = () => {
    ReactDOM.render(
        <TodoApp
            todos={store.getState().todos}
        />,
        document.getElementById('root')
    );

}

store.subscribe(render);
render();
