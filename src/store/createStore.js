import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import { connectRoutes } from 'redux-first-router';

import rootReducer from './rootReducer'
import routePaths from './routePaths';

const {middleware: routerMiddleware, enhancer: routerEnhancer, initialDispatch} = connectRoutes(routePaths, {initialDispatch: false});

// const store = configureStore({ reducer: rootReducer }) The store now has
// redux-thunk added and the Redux DevTools Extension is turned on





function configureRouteStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), routerMiddleware],
    enhancers: (defaultEnhancers) => [routerEnhancer, ...defaultEnhancers]
  })
  initialDispatch();
  return store;
}

const store = configureRouteStore();
export default store;
