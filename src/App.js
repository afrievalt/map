import './App.css'
import React from 'react'
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'

import FirebaseListener from './controls/FirebaseListener'
import Route from './controls/Route'
import CompanyGrid from './pages/company/grid'
import CompanyForm from './pages/company/form'
import ContactForm from './pages/Contact/ContactForm'
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
        <Route type='CONTACT'>
          <ContactList />
        </Route>
        <Route type='CONTACT_ADD'>
          <ContactForm />
        </Route>
        <Route type='COMPANY_ADD'>
          <CompanyForm />
        </Route>
        <Route type='COMPANY'>
          <CompanyGrid />
        </Route>
      </LeftSidebar>

    </AppProvider>

  )
}

export default App
