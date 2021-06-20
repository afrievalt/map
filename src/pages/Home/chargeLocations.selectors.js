import { createSelector } from 'reselect'

const EMPTY = {}
const selectChargeLocations = state => state.chargeLocations.foundChargeLocations

export const selectChargeLocationsForMap = createSelector(selectChargeLocations, locations => {
  return locations.map(location => {
    const { AddressInfo, ID } = location || EMPTY
    const { Latitude, Longitude } = AddressInfo || EMPTY
    const coordinates = [Longitude, Latitude]
    return {
      coordinates,
      id: ID
    }
  })
})
