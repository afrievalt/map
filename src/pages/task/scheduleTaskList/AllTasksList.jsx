import { Container } from '@material-ui/core'
import React, { memo } from 'react'
import MiniTaskForm from './MiniTask.form.jsx'
import TaskList from './Task.list.jsx'
import DropTarget from '../../../controls/DropTarget'

const AllTasksList = () => {
  return (
    <Container>
      <MiniTaskForm />
      <DropTarget id='unscheduled'>
        <TaskList />
      </DropTarget>

    </Container>
  )
}

export default memo(AllTasksList)
