import { combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import routePaths from './routePaths';
import { firebaseReducer } from 'react-redux-firebase'

const { reducer: location } = connectRoutes(routePaths)

const rootReducer = combineReducers({ location, firebase: firebaseReducer })

export default rootReducer
