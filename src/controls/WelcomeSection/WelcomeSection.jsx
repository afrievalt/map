import { Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { signOut } from '../../store/auth.duck'
import If from '../If'

export const WelcomeSection = ({ welcomeMessage, isLoggedIn, signOut }) => {
  return (
    <>
      <If condition={isLoggedIn}>
        {welcomeMessage}.  <Button onClick={signOut}>Sign Out</Button>
      </If>
      <If condition={!isLoggedIn}>
        <Link to='/admin/signin'>Sign In</Link>
        <br />
        <Link to='/admin/signup'>Create Account</Link>
      </If>
    </>
  )
}

const selectWelcomeMessage = state => state.firebase.auth.email
const selectIsLoggedIn = state => !state.firebase.auth.isEmpty

const mastStateToProps = state => ({
  welcomeMessage: selectWelcomeMessage(state),
  isLoggedIn: selectIsLoggedIn(state)
})

const actionsCreators = { signOut }

export default connect(mastStateToProps, actionsCreators)(WelcomeSection)
