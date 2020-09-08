const addCounter = (list) => {
    //list.push(0);

    return [...list, 0]
}

const removeCounter = (list, index) => {
    //list.splice(index, 1);   //mutable code

    return [
        ...list.slice(0, index),
        ...list.slice(index + 1, list.length)
    ]
};

const incrementCounter = (list, index) => {
    /*     list[index] += 1;    //mutable code
        return list; */
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1, list.length)
    ]
};

export { addCounter, removeCounter, incrementCounter }