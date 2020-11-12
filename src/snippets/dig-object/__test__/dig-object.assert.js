import digObject from '../dig-object'

const object = {
    type: 'material',
    info: {
        age: 2700,
        cityOfFoundation: 'Kansas',
        data: {
            name: 'silicot'
        }
    }
}

test('looks up the object for the key \'name\' and returns its value.', () => {
    expect(digObject('name', object)).toBe('silicot')
})