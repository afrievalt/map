import {Button, Container, CssBaseline} from '@material-ui/core';
import React from 'react'
import SimpleForm from '../../form/SimpleForm';
import InputField from '../../form/Input.field';
import validate from './validate';
import {createUserAccount} from '../../store/auth.duck';

const handleSubmit = (values) => {
  createUserAccount(values)
}

const SignUpForm = () => {
  return (
    <Container>
      <CssBaseline/>
      <SimpleForm onSubmit={handleSubmit} validate={validate}>
        <InputField fieldId='email' label="E-mail Address"/>
        <InputField
          fieldId='password'
          label="Create Password"
          autoComplete="off"
          type='password'/>
        <Button
          type="submit"
          variant="contained"
          color="inherit">Create</Button>
      </SimpleForm>
    </Container>
  )

}

export default SignUpForm;