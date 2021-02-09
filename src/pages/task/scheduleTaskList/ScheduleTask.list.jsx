import { Container } from '@material-ui/core'
import React, { memo } from 'react'
import MiniTaskForm from './MiniTask.form.jsx'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import TaskList from './Task.list.jsx'
import { useActions } from '../../../hooks/useActions.js'
import { dragEnd } from './taskActions.js'


const ScheduleTaskList = () => {
  const handleDragEnd = useActions(dragEnd)
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
