import { Container } from '@material-ui/core'
import React from 'react'
import Link from 'redux-first-router-link'

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Link to='/admin/signin'>Sign In</Link>
      <Link to='/admin/signup'>Create Account</Link>
    </Container>
  )
}

export default Home
