import { makeArray } from './convert'

describe('makeArray - ', () => {
  it('when array > keep array  ', () => {
    // arrange
    // act
    const result = makeArray(['foo', 'bar'])

    // assert
    expect(result).toEqual(['foo', 'bar'])
  })

  it('non array > array array  ', () => {
    // arrange
    // act
    const result = makeArray('foo')

    // assert
    expect(result).toEqual(['foo'])
  })
})
