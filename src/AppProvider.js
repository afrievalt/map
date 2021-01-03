import './App.css'
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import store, { rrfProps } from './store/createStore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

const AppProvider = ({children}) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {children}
      </ReactReduxFirebaseProvider>
    </Provider>

  )
}

export default memo(AppProvider)
