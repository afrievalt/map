import React, { Children, cloneElement } from 'react'
import { Draggable } from 'react-beautiful-dnd'

const DragTarget = ({ dragId, children, index }) => {
  const child = Children.only(children)
  return (
    <Draggable draggableId={dragId} index={index}>
      {(dragContext) => console.log('DragTarget.jsx:8 dragContext: ',  dragContext) || (
        <>
          {cloneElement(child, { dragContext, index })}
          {dragContext.placeholder}
        </>
      )}
    </Draggable>
  )
}

export default DragTarget
