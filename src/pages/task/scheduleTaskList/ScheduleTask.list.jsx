import { Container } from '@material-ui/core'
import React, { memo } from 'react'
import MiniTaskForm from './MiniTask.form.jsx'
import { DragDropContext } from 'react-beautiful-dnd'
import TaskList from './Task.list.jsx'
import { useActions } from '../../../hooks/useActions.js'
import { dragEnd } from './taskActions.js'
import DropTarget from '../../../controls/DropTarget'
import ScheduleSlotList from './ScheduleSlotList/ScheduleSlotList.jsx'
const ScheduleTaskList = () => {
  const handleDragEnd = useActions(dragEnd)

  return (
    <Container>
      <MiniTaskForm />
      <DragDropContext onDragEnd={handleDragEnd}>
        <ScheduleSlotList />
        <DropTarget id='backlog'>
          <TaskList />
        </DropTarget>
      </DragDropContext>
    </Container>
  )
}

export default memo(ScheduleTaskList)
