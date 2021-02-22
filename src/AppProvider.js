import './App.css'
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import store, { rrfProps } from './store/createStore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import DragDropContextProvider from './controls/DragDropContextProvider'

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <DragDropContextProvider>
          {children}
        </DragDropContextProvider>
      </ReactReduxFirebaseProvider>
    </Provider>

  )
}

export default memo(AppProvider)
