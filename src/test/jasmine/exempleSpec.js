const fns = require('../../index.js');

describe('Hello Function: ', () => {
    it('it should say \'Hello World\'', () => {
        const hello = fns.helloFunction('Hello World');
        expect(hello).toEqual('This value is Hello World');
    })
})

describe('Operation Function', () => {
    it('it should sum values', () => {
        const sum = fns.operations(2,2,'+');
        expect(sum).toEqual(4);
    })
    it('it should sub values', () => {
        const sub = fns.operations(2,2,'-');
        expect(sub).toEqual(0);
    })
    it('it should divide values', () => {
        const divide = fns.operations(2,2,'/');
        expect(divide).toEqual(1);
    })
    it('it should multiple values', () => {
        const multiple = fns.operations(2,2,'*');
        expect(multiple).toEqual(4);
    })
    xit('it shouldn\'t has operation', () => {
        const wrong = fns.operations(2,2,'wrong');
        expect(wrong).toEqual('Invalid operator');
    })
    // Force wrong test
    it('it shouldn\'t has operation - force wrong test', () => {
        const wrong = fns.operations(2,2,'wrong');
        expect(wrong).toEqual('Operation invalid');
    })
})
