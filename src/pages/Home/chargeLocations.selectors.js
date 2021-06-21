import { createSelector } from 'reselect'

const EMPTY = {}
export const selectChargeLocations = state => state.chargeLocations.foundChargeLocations
export const selectRouteLocation = state => state.location

export const selectUniqueChargeLocations = createSelector(selectChargeLocations,
  locations => {
    const allIds = []
    return locations.filter(l => {
      const { ID } = l
      if (!allIds.includes(ID)) {
        allIds.push(ID)
        return true
      }
      return false
    })
  }
)
export const selectChargeLocationsForMap = createSelector(
  selectUniqueChargeLocations,
  selectRouteLocation,

  (locations, routeLocation) => {
    const { payload } = routeLocation || EMPTY
    const { id } = payload || EMPTY
    console.log({ id })
    return locations
      .map(location => {
        const { AddressInfo, ID } = location || EMPTY
        const { Latitude, Longitude } = AddressInfo || EMPTY
        const coordinates = [Longitude, Latitude]
        return {
          coordinates,
          id: ID
        }
      })
      .filter(location => !id || id === location.id)
  })
