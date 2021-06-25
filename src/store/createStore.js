import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { connectRoutes } from 'redux-first-router'
import rootReducer from './rootReducer'
import routePaths from '../routes/routePaths'

const { middleware: routerMiddleware, enhancer: routerEnhancer, initialDispatch } = connectRoutes(routePaths, { initialDispatch: false })

const defaultMiddleware = getDefaultMiddleware({
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
  dispatch: store.dispatch
}

export default store
