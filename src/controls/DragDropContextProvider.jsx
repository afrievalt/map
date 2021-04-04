import React, { memo } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

const DragDropContextProvider = ({ children, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {children}
    </DragDropContext>
  )
}

export default memo(DragDropContextProvider)
