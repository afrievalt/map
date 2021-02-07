import { Button, Container, CssBaseline } from '@material-ui/core'
import React, { memo } from 'react'
import SimpleForm from '../../../form/SimpleForm'
import taskValidate from './taskValidate'
import { upsertTask } from './taskActions'
import { useActions } from '../../../hooks/useActions'
import InputField from '../../../form/Input.field'

const initialValues = { status: 'todo' }
const MiniTaskForm = () => {
  const handleSubmit = useActions(upsertTask)
  return (
    <Container>
      <CssBaseline />
      <SimpleForm onSubmit={handleSubmit} validate={taskValidate} initialValues={initialValues}>
        <InputField label='Add Task' fieldId='title' />
        <Button type='submit' variant='contained' color='inherit'>
          Submit
        </Button>
      </SimpleForm>
    </Container>
  )
}

export default memo(MiniTaskForm)
