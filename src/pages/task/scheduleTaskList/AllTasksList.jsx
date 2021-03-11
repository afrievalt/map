import { Container } from '@material-ui/core'
import React, { memo } from 'react'
import MiniTaskForm from './MiniTask.form.jsx'
import TaskList from './Task.list.jsx'
import DropTarget from '../../../controls/DropTarget'
import { useSelector } from 'react-redux'
import { selectAllUnscheduledTaskListData } from './taskList.selectors.js'

const AllTasksList = () => {
  const taskList = useSelector(selectAllUnscheduledTaskListData)

  return (
    <Container>
      <MiniTaskForm />
      <DropTarget id='unscheduled'>
        <TaskList taskList={taskList} />
      </DropTarget>

    </Container>
  )
}

export default memo(AllTasksList)
