import React from 'react'
import { TodoList } from './TodoList'
import { connect } from 'react-redux'


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


class VisibleTodoList extends React.Component {
    componentDidMount() {
        const { store } = this.context;
        this.unsuscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const { store } = this.context;
        const state = store.getState();

        return (
            <TodoList
                todos={
                    getVisibleTodos(
                        state.todos,
                        state.VisibilityFilter
                    )
                }
                onTodoClick={id =>
                    store.dispatch({
                        type: 'TOGGLE_TODO',
                        id
                    })
                }
            />
        )
    }
}
VisibleTodoList.contextTypes = {
    store: React.React.PropTypes
}

export { VisibleTodoList }