import React from 'react'
import SignUpForm from '../pages/SignUpForm'
import SignInForm from '../pages/SignInForm'
import Route from '../controls/Route'
import Home from '../pages/Home'

const MainContent = ({ type, children }) => (
  <>
    <Route type='HOME'>
      <Home />
    </Route>
    <Route type='SIGNUP'>
      <SignUpForm />
    </Route>
    <Route type='SIGNIN'>
      <SignInForm />
    </Route>
  </>
)

export default React.memo(MainContent)
