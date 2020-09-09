import React from 'react'
import { Link } from './Link'
import { connect } from 'react-redux'


const mapStateToProps = (
    state,
    ownProps
) => {
    return {
        active:
            ownProps.filter ===
            state.visibilityFilter
    }
};

const mapDispatchToProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter: ownProps.filter
            });
        }
    };
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)


export { FilterLink };