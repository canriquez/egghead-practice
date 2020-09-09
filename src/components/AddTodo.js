import React from 'react'
import { connect } from 'react-redux'

let AddTodo = ({ dispatch }) => {
    let input;
    let nextTodoId = 0;
    return (
        <div>
            <input ref={node => {
                input = node
            }
            } type="text" />
            <button onClick={() => {
                dispatch({
                    type: 'ADD_TODO',
                    id: nextTodoId += 1,
                    text: input.value
                })
                input.value = '';
            }} >
                Add Todo
                </button>
        </div>
    )
}

AddTodo = connect()(AddTodo);


export { AddTodo }