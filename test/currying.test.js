const currying = require('../utils/currying')

describe('currying unit tests', () => {
    const fn = currying(function(a, b, c) {
        return a + b + c
    })
    test('fn(2, 3)(5) should be 10', () => {
        console.log('ffff', fn)
        expect(fn(2, 3)(5)).toEqual(10)
    })
    test('fn(2)(3)(5) should be 10', () => {
        expect(fn(2)(3)(5)).toEqual(10)
    })
    test('fn(2)()(3)(5) should be 10', () => {
        expect(fn(2)()(3)(5)).toEqual(10)
    })
})
