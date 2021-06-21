import { createSelector } from 'reselect'

const EMPTY = {}
export const selectChargeLocations = state => state.chargeLocations.foundChargeLocations
export const selectRouteLocation = state => state.location

export const selectChargeLocationsForMap = createSelector(
  selectChargeLocations,
  selectRouteLocation,

  (locations, routeLocation) => {
    const { payload } = routeLocation || EMPTY
    const { id } = payload || EMPTY
    console.log({ id })
    return locations
      .map(location => {
        const { AddressInfo, UUID } = location || EMPTY
        const { Latitude, Longitude } = AddressInfo || EMPTY
        const coordinates = [Longitude, Latitude]
        return {
          coordinates,
          id: UUID
        }
      })
      .filter(location => !id || id === location.id)
  })
