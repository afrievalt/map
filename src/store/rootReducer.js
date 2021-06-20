import { combineReducers } from 'redux'
import { connectRoutes } from 'redux-first-router'
import chargeLocations from './ducks/chargeLocations.duck'
import routePaths from '../routes/routePaths'
import { firebaseReducer } from 'react-redux-firebase'

const { reducer: location } = connectRoutes(routePaths)

const rootReducer = combineReducers({
  chargeLocations,
  location,
  firebase: firebaseReducer 
})

export default rootReducer
