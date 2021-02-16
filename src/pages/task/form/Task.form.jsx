import { Button, Container, CssBaseline } from '@material-ui/core'
import React, { memo } from 'react'
import SimpleForm from '../../../form/SimpleForm'
import taskValidate from './taskValidate'
import { upsertTask } from '../scheduleTaskList/taskActions'
import { useActions } from '../../../hooks/useActions'
import TaskFieldGroup from './TaskFieldGroup'

const TaskForm = () => {
  const handleSubmit = useActions(upsertTask)
  return (
    <Container>
      <CssBaseline />
      <SimpleForm onSubmit={handleSubmit} validate={taskValidate}>
        <TaskFieldGroup />
        <Button type='submit' variant='contained' color='inherit'>
          Submit
        </Button>
      </SimpleForm>
    </Container>
  )
}

export default memo(TaskForm)
