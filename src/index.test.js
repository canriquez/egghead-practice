import counter from './index.js'


test('basix reducer test Inc', () => {

    expect(
        counter(0, { type: 'INCREMENT' })
    ).toEqual(1);
});
test('basix reducer test Inc', () => {
    expect(
        counter(1, { type: 'INCREMENT' })
    ).toEqual(2);
});
test('basix reducer test dec', () => {
    expect(
        counter(2, { type: 'DECREMENT' })
    ).toEqual(1);
});
test('basix reducer test dec', () => {
    expect(
        counter(1, { type: 'DECREMENT' })
    ).toEqual(0);
});

test('basix reducer test anything', () => {
    expect(
        counter(1, { type: 'anything' })
    ).toEqual(1);
});

console.log('Test Passed');