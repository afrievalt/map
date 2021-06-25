import { createSelector } from 'reselect'
import { selectRouteLocation, selectUniqueChargeLocations } from '../chargeLocations.selectors'

const EMPTY = {}

export const selectChargeLocationsForContentArea = createSelector(
  selectUniqueChargeLocations,
  selectRouteLocation,
  (locations, routeLocation) => {
    const { payload } = routeLocation

    return locations.map(location => {
      const { addressInfo, id, connections } = location || EMPTY
      const { title, town, addressLine1, accessComments, stateOrProvince, postcode, usageCost } = addressInfo || EMPTY
      const isFullDetails = id === +payload?.id
      const addressLine2 = `${town}, ${stateOrProvince} ${postcode}`
      const details = isFullDetails
        ? [
            addressLine1,
            addressLine2,
            accessComments,
            usageCost,
            `Connections: ${connections.length}`
          ].filter(l => l)
        : [addressLine1]
      return {
        id,
        title,
        details
      }
    })
  })
