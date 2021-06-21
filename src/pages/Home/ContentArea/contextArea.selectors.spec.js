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
      id: 175784,
      title: 'DARCARS Lanham Kia',
      subTitle: 'Lanham',
      details: ['9020 Lanham Severn Road', 'Connections: 1']
    })
  })
})
