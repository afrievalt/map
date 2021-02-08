import { Container } from '@material-ui/core'
import React, { memo } from 'react'
import MiniTaskForm from './MiniTask.form.jsx'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import TaskList from './Task.list.jsx'

const handleDragEnd = result => {
  const { destination, source, draggableId } = result
  const { droppableId, index } = destination || {}
  const newTaskOrder= 1
}

const ScheduleTaskList = () => {
  return (
    <Container>
      <MiniTaskForm />
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='backlog'>
          {(provided) => (
            <div ref={provided.innerRef}>
              <TaskList provided={provided} />
              {provided.placeholder}
            </div>

          )}

        </Droppable>
      </DragDropContext>
    </Container>
  )
}

export default memo(ScheduleTaskList)
