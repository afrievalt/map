import React, { memo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { useActions } from '../hooks/useActions'
import { dragEnd } from '../pages/task/scheduleTaskList/taskActions'

const DragDropContextProvider = ({ children }) => {
  const handleDragEnd = useActions(dragEnd)

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {children}
    </DragDropContext>
  )
}

export default memo(DragDropContextProvider)
