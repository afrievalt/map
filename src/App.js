import './App.css'
import React from 'react'
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'

import FirebaseListener from './controls/FirebaseListener'
import Route from './controls/Route'
import ContactList from './pages/Contact/ContactList'
import Home from './pages/Home'
import AppProvider from './AppProvider'
import LeftSidebar from './controls/LeftSidebar'

function App () {
  return (
    <AppProvider>
      <FirebaseListener />
      <LeftSidebar>
        <Route type='HOME'>
          <Home />
        </Route>
        <Route type='SIGNUP'>
          <SignUpForm />
        </Route>
        <Route type='SIGNIN'>
          <SignInForm />
        </Route>
      </LeftSidebar>
      <Route type='CONTACT_LIST'>
        <ContactList />
      </Route>
    </AppProvider>

  )
}

export default App
