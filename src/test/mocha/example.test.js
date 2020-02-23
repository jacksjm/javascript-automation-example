const expect = require('chai').expect
const fns = require('../../index.js');

describe('Hello Function: ', () => {
    it('it should say \'Hello World\'', () => {
        const hello = fns.helloFunction('Hello World');
        expect(hello).to.be.equal('This value is Hello World');
    })
})

describe('Operation Function', () => {
    it('it should sum values', () => {
        const sum = fns.operations(2,2,'+');
        expect(sum).to.be.equal(4);
    })
    it('it should sub values', () => {
        const sub = fns.operations(2,2,'-');
        expect(sub).to.be.equal(0);
    })
    it('it should divide values', () => {
        const divide = fns.operations(2,2,'/');
        expect(divide).to.be.equal(1);
    })
    it('it should multiple values', () => {
        const multiple = fns.operations(2,2,'*');
        expect(multiple).to.be.equal(4);
    })
    it.skip('it shouldn\'t has operation', () => {
        const wrong = fns.operations(2,2,'wrong');
        expect(wrong).to.be.equal('Invalid operator');
    })
    // Force wrong test
    it('it shouldn\'t has operation - force wrong test', () => {
        const wrong = fns.operations(2,2,'wrong');
        expect(wrong).to.be.equal('Operation invalid');
    })
})
