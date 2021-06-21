import reducer, { fetchChargeLocationsFailure, initialState } from './chargeLocations.duck'

describe('chargeLocations reducer', () => {
  it('fetchChargeLocationsFailure action - updates state', () => {
    // arrange
    const { type } = fetchChargeLocationsFailure
    const action = {
      type,
      payload: 'test error'
    }
    const state = { ...initialState, loading: true }

    // act
    const result = reducer(state, action)

    // assert
    expect(result).toEqual({
      foundChargeLocations: [],
      loading: false,
      error: 'test error',
      selected: null
    })
  })
})
