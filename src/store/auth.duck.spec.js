import reducer, { fetchAuthFailure, initialState } from './auth.duck'

describe('auth reducer', () => {
  it('fetchAuthFailure action - updates state', () => {
    // arrange
    const { type } = fetchAuthFailure
    const action = {
      type,
      payload: 'test error'
    }
    const state = { ...initialState, loading: true }

    // act
    const result = reducer(state, action)

    // assert
    expect(result).toEqual({
      foundAuth: null,
      loading: false,
      error: 'test error',
      selected: null
    })
  })
})
