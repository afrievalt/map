import { Button, Container, CssBaseline } from '@material-ui/core'
import React from 'react'
import Link from 'redux-first-router-link'

const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Link to='/admin/signup'>Sign Up</Link>
    </Container>
  )
}

export default Home
