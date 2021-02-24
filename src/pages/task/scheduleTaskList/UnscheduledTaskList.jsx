import { Container } from '@material-ui/core'
import React, { memo } from 'react'
import MiniTaskForm from './MiniTask.form.jsx'
import TaskList from './Task.list.jsx'
import DropTarget from '../../../controls/DropTarget'
import { useSelector } from 'react-redux'
import { selectUnscheduledTaskListData } from './taskList.selectors'
const UnscheduledTaskList = () => {
  const taskList = useSelector(selectUnscheduledTaskListData)

  return (
    <Container>
      <MiniTaskForm />
      <DropTarget id='unscheduled'>
        <TaskList taskList={taskList} />
      </DropTarget>

    </Container>
  )
}

export default memo(UnscheduledTaskList)
