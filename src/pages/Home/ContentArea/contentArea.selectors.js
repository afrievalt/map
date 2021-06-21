import { createSelector } from 'reselect'
import { selectChargeLocations } from '../chargeLocations.selectors'

const EMPTY = {}

export const selectChargeLocationsForContentArea = createSelector(selectChargeLocations, locations => {
  return locations.map(location => {
    const { AddressInfo, ID, Connections } = location || EMPTY
    const { Title, Town, AddressLine1, AccessComments } = AddressInfo || EMPTY
    const details = [
      AddressLine1,
      AccessComments,
      `Connections: ${Connections.length}`
    ].filter(l => l)
    return {
      id: ID,
      title: Title,
      subTitle: Town,
      details
    }
  })
})
