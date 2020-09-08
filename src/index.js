import { todos, visibilityFilter } from './todoListReducer'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'


const todoApp = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
};


const store = createStore(todoApp) // We create a store with the reducer

console.log('Initial State:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
});

console.log('Current State:');
console.log(store.getState());
console.log('--------------');

console.log('Dispatching ADD_TODO.');
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Sign Spotify Job Contract '
});

console.log('Current State:');
console.log(store.getState());
console.log('--------------');


console.log('Dispatching TOGGLE_TODO.');
store.dispatch({
    type: 'TOGGLE_TODO',
    id: 0,
});

console.log('Current State:');
console.log(store.getState());
console.log('--------------');


console.log('Dispatching SET_VISIBILITY_FILTER');
store.dispatch({
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_COMPLETED'
});

console.log('Current State:');
console.log(store.getState());
console.log('--------------');

