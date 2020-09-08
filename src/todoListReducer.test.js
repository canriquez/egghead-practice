import deepFreeze from 'deep-freeze'
import { todos } from './todoListReducer'


it.only('test todos reducer', () => {
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

it.only('test toggle ToDO reducer', () => {
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