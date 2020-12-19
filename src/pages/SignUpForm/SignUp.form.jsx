import {Container, CssBaseline} from '@material-ui/core';
import React from 'react'
import SimpleForm from '../../form/SimpleForm';
import InputField from '../../form/Input.field';
import validate from './validate';

const doNothing = () => 0
const SignUpForm = () => {
  return (
    <Container>
      <CssBaseline />
      <SimpleForm onSubmit={doNothing} validate={validate}>
        <InputField fieldId='email' label="E-mail Address"/>
        <InputField
          fieldId='password'
          label="Create Password"
          autocomplete="off"
          type='password'/>
      </SimpleForm>
    </Container>
  )

}

export default SignUpForm;