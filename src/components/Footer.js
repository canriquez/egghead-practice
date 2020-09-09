import React from 'react'
import { FilterLink } from './FilterLink'

const Footer = ({ store }) => (
    <p>
        Show Todos:
        {' '}
        <FilterLink
            filter='SHOW_ALL'
            store={store}
        >
            All
    </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_ACTIVE'
            store={store}
        >
            Active
    </FilterLink>
        {' '}
        <FilterLink
            filter='SHOW_COMPLETED'
            store={store}
        >
            Completed
    </FilterLink>
    </p>
)

export { Footer }