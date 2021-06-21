import { createSelector } from 'reselect'
import { selectRouteLocation, selectUniqueChargeLocations } from '../chargeLocations.selectors'

const EMPTY = {}

export const selectChargeLocationsForContentArea = createSelector(
  selectUniqueChargeLocations,
  selectRouteLocation,
  (locations, routeLocation) => {
    console.log(routeLocation)
    return locations.map(location => {
      const { addressInfo, id, connections } = location || EMPTY
      const { title, town, addressLine1, accessComments } = addressInfo || EMPTY
      const details = [
        addressLine1,
        town,
        accessComments,
      `Connections: ${connections.length}`
      ].filter(l => l)
      return {
        id,
        title,
        details
      }
    })
  })
