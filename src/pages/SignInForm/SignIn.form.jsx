import { Button, Container, CssBaseline } from '@material-ui/core'
import React from 'react'
import SimpleForm from '../../form/SimpleForm'
import InputField from '../../form/Input.field'
import validate from './validate'
import { signInAccount } from '../../store/auth.duck'
import { useActions } from '../../hooks/useActions'

const SignUpForm = () => {
  const handleSubmit = useActions(signInAccount)
  return (
    <Container>
      <CssBaseline />
      <SimpleForm onSubmit={handleSubmit} validate={validate}>
        <InputField fieldId='email' label='E-mail Address' />
        <InputField
          fieldId='password'
          label='Password'
          autoComplete='off'
          type='password'
        />
        <Button type='submit' variant='contained' color='inherit'>
          Sign In
        </Button>
      </SimpleForm>
    </Container>
  )
}

export default SignUpForm
