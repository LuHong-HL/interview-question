require('../utils/softbind.js')

describe('softbind unit tests', () => {
    const fn = function () {
        return this.name
    }
    const obj = {
        name: 'obj'
    }
    const obj2 = {
        name: 'obj2'
    }
    const softbindFn = fn.softbind(obj)
    test('softbind should be obj', () => {
        expect(softbindFn()).toEqual('obj')
    })
    test('softbind should be obj2', () => {
        expect(softbindFn.apply(obj2)).toEqual('obj2')
    })

})
