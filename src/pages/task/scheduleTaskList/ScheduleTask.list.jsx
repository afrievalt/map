import { Container, RootRef } from '@material-ui/core'
import { selectTaskListData } from './taskList.selectors.js'
import React, { memo } from 'react'
import MiniTaskForm from './MiniTask.form.jsx'
import { useSelector } from 'react-redux'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import TaskList from './Task.list.jsx'

const handleDragEnd = result => {}
const ScheduleTaskList = () => {
  const taskList = useSelector(selectTaskListData)
  console.log('Task.list.jsx:20 taskList: ', taskList)
  return (
    <Container>
      <MiniTaskForm />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable id='backlog'>
          {(provided) => (
            <RootRef rootRef={provided.innerRef}>
              <TaskList provided={provided} />
            </RootRef>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  )
}

export default memo(ScheduleTaskList)
