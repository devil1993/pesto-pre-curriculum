const {
    add,
    substract,
    multiply,
    divide
} = require('./index')

const {
    describe,
    it,
    expect,
    matchers 
  } = require('./testFramework')

describe('add',()=>{
    it('adds two numbers', ()=>
    {
        const result = add(3,2);
        expect(result).toBe(5);
    })
})


describe('substract',()=>{
    it('substracts second number from the first', ()=>
    {
        const result = substract(3,2);
        expect(result).toBe(1);
    })
})

describe('multiply',()=>{
    it('multiplies second number from the first', ()=>
    {
        const result = multiply(3,2);
        expect(result).toBe(6);
    })
})

describe('divide',()=>{
    it('divides second number from the first', ()=>
    {
        const result = divide(6,2);
        expect(result).toBe(3);
    })
})