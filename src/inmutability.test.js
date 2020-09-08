import deepFreeze from 'deep-freeze'
import { addCounter, removeCounter, incrementCounter, toggleTodo } from './inmutability'


it('test inmmutability adCounter', () => {
    const listBefore = [];
    const listAfter = [0];

    deepFreeze(listBefore)

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter);
});

it('test removeCounter ', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 20];

    deepFreeze(listBefore)

    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
});

it('test incrementCounter ', () => {
    const listBefore = [0, 10, 20];
    const listAfter = [0, 11, 20];

    deepFreeze(listBefore)

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
});


it('test toogleTodo ', () => {
    const todoBefore = {
        id: 0,
        text: 'Learn Redux',
        completed: false
    };
    const todoAfter = {
        id: 0,
        text: 'Learn Redux',
        completed: true
    }

    deepFreeze(todoBefore)

    expect(
        toggleTodo(todoBefore, 1)
    ).toEqual(todoAfter);
});



