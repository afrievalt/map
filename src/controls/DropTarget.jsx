import React, { Children, cloneElement } from 'react'
import { Droppable } from 'react-beautiful-dnd'

const DropTarget = ({ id, children }) => {
  const child = Children.only(children)
  return (
    <Droppable droppableId={id}>
      {(dropContext) => (
        <div ref={dropContext.innerRef}>
          {cloneElement(child, { dropContext })}
          {dropContext.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default DropTarget
