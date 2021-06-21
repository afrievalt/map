import data from '../../../map-points-mock.json'
import { initialState as chargeLocations } from '../../../store/ducks/chargeLocations.duck'
import { selectChargeLocationsForContentArea } from './contentArea.selectors'
const rawState = {
  chargeLocations: {
    ...chargeLocations,
    foundChargeLocations: data
  }
}

describe('selectChargeLocationsForContentArea - ', () => {
  it('formats data with details ', () => {
    // arrange

    // act
    const result = selectChargeLocationsForContentArea(rawState)
    console.log(result[0])
    // assert
    expect(result[0]).toEqual({
      id: 175911,
      title: 'Georgia Power Macon - Zebulon Road',
      details: [
        '6225 Zebulon Road',
        'Macon',
        "In shopping center behind Applebee's, Fazoli's, and Freddy's; although " +
          'the address is on Zebulon Road, access is via Peake Road from I-475.',
        'Connections: 3'
      ]
    })
  })
})
