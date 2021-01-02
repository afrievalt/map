import { Button, Container, CssBaseline } from '@material-ui/core'
import React, { memo } from 'react'
import SimpleForm from '../../form/SimpleForm'
import InputField from '../../form/Input.field'
import validate from './validate'
import { addStudent } from '../../store/student.duck'

import { useActions } from '../../hooks/useActions'

const AddStudentForm = () => {
  const handleSubmit = useActions(addStudent)
  return (
    <Container>
      <CssBaseline />
      <SimpleForm onSubmit={handleSubmit} validate={validate}>
        <InputField fieldId='id' label='Car tag ID' />
        <InputField
          fieldId='lastName'
          label='Name on car tag'
        />
        <InputField
          fieldId='studentFirstName'
          label='Student First Name'
        />
        <InputField
          fieldId='studentLastName'
          label='Student Last Name'
        />
        <Button type='submit' variant='contained' color='inherit'>
          Create
        </Button>
      </SimpleForm>
    </Container>
  )
}

export default memo(AddStudentForm)
