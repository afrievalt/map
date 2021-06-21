import './App.css'
import React, { memo } from 'react'
import { Provider } from 'react-redux'
import store from './store/createStore'

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>

  )
}

export default memo(AppProvider)
