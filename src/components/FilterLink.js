import React from 'react'

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

export { FilterLink };