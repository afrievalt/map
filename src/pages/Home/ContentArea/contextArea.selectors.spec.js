import data from '../../../map-points-mock.json'
import { initialState as chargeLocations } from '../../../store/ducks/chargeLocations.duck'
import { selectChargeLocationsForContentArea } from './contentArea.selectors'
const rawState = {
  chargeLocations: {
    ...chargeLocations,
    foundChargeLocations: data
  },
  location: {
    payload: {
      id: 175911
    }
  }
}

describe('selectChargeLocationsForContentArea - ', () => {
  it('when selected - show full details', () => {
    // arrange

    // act
    const result = selectChargeLocationsForContentArea(rawState)
    // assert
    expect(result[0]).toEqual({
      id: 175911,
      title: 'Georgia Power Macon - Zebulon Road',
      details: [
        '6225 Zebulon Road',
        'Macon, GA 31210',
        "In shopping center behind Applebee's, Fazoli's, and Freddy's; although " +
          'the address is on Zebulon Road, access is via Peake Road from I-475.',
        'Connections: 3'
      ]
    })
  })

  it('when not selected - show slim details', () => {
    // arrange
    const state = {
      ...rawState,
      location: {}
    }
    // act
    const result = selectChargeLocationsForContentArea(state)

    // assert
    expect(result[0]).toEqual({
      id: 175911,
      title: 'Georgia Power Macon - Zebulon Road',
      details: ['6225 Zebulon Road']
    })
  })
})
