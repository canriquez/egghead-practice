import deepFreeze from 'deep-freeze'
import { todos, visibilityFilter } from './todoListReducer'


it('test todos reducer', () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    }

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }
    ]

    /* inmmutability check */
    deepFreeze(stateBefore);  //makes sure reducer is pure function
    deepFreeze(action); //makes sure reducer is pure function

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
});

it('test toggle ToDO reducer', () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn Redux',
            completed: false
        }
    ]


    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    }

    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        },
        {
            id: 1,
            text: 'Learn Redux',
            completed: true,
        }
    ]

    /* inmmutability check */
    deepFreeze(stateBefore);  //makes sure reducer is pure function
    deepFreeze(action); //makes sure reducer is pure function

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
});

it('test VISIBILITY_FILTER', () => {
    const stateBefore = {}


    const action = {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
    }

    const stateAfter = 'SHOW_COMPLETED';

    /* inmmutability check */
    deepFreeze(stateBefore);  //makes sure reducer is pure function
    deepFreeze(action); //makes sure reducer is pure function

    expect(
        visibilityFilter(stateBefore, action)
    ).toEqual(stateAfter);
});