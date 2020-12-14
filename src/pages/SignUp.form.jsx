import {Container, CssBaseline} from '@material-ui/core';
import React from 'react'
import SimpleForm from '../controls/SimpleForm';
import InputField from '../fields/Input.field';

const doNothing = () => 0
const SignUpForm = ({
  handleSubmitForm,
  initialValues,
  validate,
  children,
  ...rest
}) => {
  return (
    <Container>
      <CssBaseline />
      <SimpleForm onSubmit={doNothing} validate={doNothing}>
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