import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { connectRoutes } from 'redux-first-router'
import rootReducer from './rootReducer'
import routePaths from '../routes/routePaths'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import firebaseConfig from './firebaseConfig'
import { getFirebase } from 'react-redux-firebase'

const { middleware: routerMiddleware, enhancer: routerEnhancer, initialDispatch } = connectRoutes(routePaths, { initialDispatch: false })

firebase.initializeApp(firebaseConfig)

const defaultMiddleware = getDefaultMiddleware({
  thunk: {
    extraArgument: getFirebase
  },
  serializableCheck: false
})

function configureRouteStore () {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...defaultMiddleware, routerMiddleware],
    enhancers: (defaultEnhancers) => [routerEnhancer, ...defaultEnhancers]
  })
  initialDispatch()
  return store
}
const store = configureRouteStore()

export const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

export default store
