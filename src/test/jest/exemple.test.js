const fns = require('../../index.js');

describe('Hello Function', () => {
    test('it should say \'Hello World\'', () => {
        const hello = fns.helloFunction('Hello World');
        expect(hello).toEqual('This value is Hello World');
    })
})

describe('Operation Function', () => {
    test('it should sum values', () => {
        const sum = fns.operations(2,2,'+');
        expect(sum).toEqual(4);
    })
    test('it should sub values', () => {
        const sub = fns.operations(2,2,'-');
        expect(sub).toEqual(0);
    })
    test('it should divide values', () => {
        const divide = fns.operations(2,2,'/');
        expect(divide).toEqual(1);
    })
    test('it should multiple values', () => {
        const multiple = fns.operations(2,2,'*');
        expect(multiple).toEqual(4);
    })
    xtest('it shouldn\'t has operation', () => {
        const wrong = fns.operations(2,2,'wrong');
        expect(wrong).toEqual('Invalid operator');
    })
    test.todo('it should multiple operations');
    // Force wrong test
    test('it shouldn\'t has operation - force wrong test', () => {
        const wrong = fns.operations(2,2,'wrong');
        expect(wrong).toEqual('Operation invalid');
    })
})
