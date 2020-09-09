import React from 'react'
import { Link } from './Link'


class FilterLink extends React.Component {

    componentDidMount() {
        const { store } = this.props;
        this.unsuscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsusbcribe();
    }
    render() {
        const props = this.props;
        const { store } = props;
        const state = store.getState()
        return (
            <Link
                active={
                    props.filter ===
                    state.visibilityFilter
                }
                onClick={() =>
                    store.dispatch({
                        type: 'SET_VISIBILITY_FILTER',
                        filter: props.filter
                    })
                }
            >{props.children}
            </Link>
        );
    }
}

export { FilterLink };