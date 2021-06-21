import { createSelector } from 'reselect'

const EMPTY = {}
export const selectChargeLocations = state => state.chargeLocations.foundChargeLocations
export const selectRouteLocation = state => state.location

export const selectUniqueChargeLocations = createSelector(selectChargeLocations,
  locations => {
    const allIds = []
    return locations.filter(l => {
      const { id } = l
      if (!allIds.includes(id)) {
        allIds.push(id)
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
        const { addressInfo, id } = location || EMPTY
        const { latitude, longitude } = addressInfo || EMPTY
        const coordinates = [longitude, latitude]
        return {
          coordinates,
          id
        }
      })
      .filter(location => !id || id === location.id)
  })
