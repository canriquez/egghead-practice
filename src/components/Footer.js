import React from 'react'
import { FilterLink } from './FilterLink'

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

export { Footer }