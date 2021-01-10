import './App.css'
import React from 'react'
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'

import FirebaseListener from './controls/FirebaseListener'
import Route from './controls/Route'
import Home from './pages/Home'
import AppProvider from './AppProvider'
import ResponsiveDrawer from './controls/ResponsiveDrawer/ResponsiveDrawer'

function App () {
  return (
    <AppProvider>
      <FirebaseListener />
      <ResponsiveDrawer />
      <Route type='HOME'>
        <Home />
      </Route>
      <Route type='SIGNUP'>
        <SignUpForm />
      </Route>
      <Route type='SIGNIN'>
        <SignInForm />
      </Route>
    </AppProvider>

  )
}

export default App
