import { combineReducers } from 'redux'
import { connectRoutes } from 'redux-first-router'
import chargeLocations from './ducks/chargeLocations.duck'
import routePaths from '../routes/routePaths'

const { reducer: location } = connectRoutes(routePaths)

const rootReducer = combineReducers({
  chargeLocations,
  location,
})

export default rootReducer
