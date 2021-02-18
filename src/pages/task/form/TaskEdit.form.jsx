import { Button, Container, CssBaseline } from '@material-ui/core'
import React, { memo } from 'react'
import SimpleForm from '../../../form/SimpleForm'
import taskValidate from './taskValidate'
import { upsertTask } from '../scheduleTaskList/taskActions'
import { useActions } from '../../../hooks/useActions'
import TaskFieldGroup from './TaskFieldGroup'
import { useSelector } from 'react-redux'
import { selectTask } from '../scheduleTaskList/taskList.selectors'

const TaskEditForm = () => {
  const handleSubmit = useActions(upsertTask)
  const initialValues = useSelector(selectTask)
  console.log('TaskEdit.form.jsx:14 initialValues: ', initialValues)
  return (
    <Container>
      <CssBaseline />
      <SimpleForm onSubmit={handleSubmit} validate={taskValidate} initialValues={initialValues}>
        <TaskFieldGroup />
        <Button type='submit' variant='contained' color='inherit'>
          Submit
        </Button>
      </SimpleForm>
    </Container>
  )
}

export default memo(TaskEditForm)
