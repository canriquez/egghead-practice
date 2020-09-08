import { todos, visibilityFilter } from './todoListReducer'
import { createStore/* , combineReducers  */ } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'

/* It uses reduce to accumulate the reducers execution as a single return */
const combineReducers = (reducers) => {
    return (state = {}, action) => { //It returns a combined  top level reducer function
        return Object.keys(reducers).reduce(
            (nextState, key) => {  //nextState, is the accoumulation named variable
                nextState[key] = reducers[key]( //it creates the nextState.key property iquals
                    state[key],                 // to the result of the reduce executed
                    action                      // for the particulat action
                );
                return nextState;               //returns the accumulated state for the next iteration (new key)
            }, {} //Reduce initial empty object (in this case)
        );
    };
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
})

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

