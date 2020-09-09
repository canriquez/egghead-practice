import React from 'react'

const Todo = ({
    onClick,
    completed,
    text
}) => (
        <li
            onClick={onClick}
            style={{
                textDecoration: completed ?
                    'line-through' :
                    'none',
                color: completed ?
                    'gray' :
                    'blue'
            }}
        >
            {text}
        </li>
    );

export { Todo };

