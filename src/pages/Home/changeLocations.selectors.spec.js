import data from '../../map-points-mock.json'
import { initialState as chargeLocations } from '../../store/ducks/chargeLocations.duck'
import { selectUniqueChargeLocations, selectChargeLocationsForMap } from './chargeLocations.selectors'
const rawState = {
  chargeLocations: {
    ...chargeLocations,
    foundChargeLocations: data
  }
}

describe('selectUniqueChargeLocations - ', () => {
  it('when 2 duplicate id - one location  ', () => {
    // arrange
    const location = rawState.chargeLocations.foundChargeLocations[0]
    const state = {
      chargeLocations: {
        ...chargeLocations,
        foundChargeLocations: [location, location] // two duplicate locations
      }
    }

    // act
    const result = selectUniqueChargeLocations(state)

    // assert
    expect(result.length).toEqual(1)
  })

  it('when 2 unique ids - two  ', () => {
    // arrange
    const location = rawState.chargeLocations.foundChargeLocations[0]
    const otherLocation = { ...location, ID: 'other id' }
    const state = {
      chargeLocations: {
        ...chargeLocations,
        foundChargeLocations: [location, location, otherLocation] // 2 unique
      }
    }

    // act
    const result = selectUniqueChargeLocations(state)

    // assert
    expect(result.length).toEqual(2)
  })
})

describe('selectChargeLocationsForMap - ', () => {
  it('formats data with coordinates ', () => {
    // arrange

    // act
    const result = selectChargeLocationsForMap(rawState)
    // assert
    expect(result[0]).toEqual({ coordinates: [-122.076575, 37.415328], id: 175784 })
  })
})
