//import { createStore } from 'redux'
const counter = (state = 0, action) => {

    if (action.type === 'INCREMENT') {
        return state + 1;
    } else if (action.type === 'DECREMENT') {
        return state - 1;
    }
    return state
}




const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener)
        };
    };

    dispatch({});
    return { getState, dispatch, subscribe }
};

const store = createStore(counter);



console.log(store.getState());
store.dispatch({ type: 'INCREMENT' });

console.log(store.getState());

const render = () => {
    document.body.innerText = store.getState();
}

store.subscribe(render);
render();


document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
})




export default counter;