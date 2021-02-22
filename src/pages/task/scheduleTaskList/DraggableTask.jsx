import React, { memo } from 'react'
import DragTarget from '../../../controls/DragTarget'
import SimpleLi from './SimpleLi'
import TaskListItem from './TaskListItem.jsx'
const DraggableTask = (props) => {
  const { id, index } = props
  return (
    <DragTarget dragId={id} index={index}>
      <SimpleLi {...props} />
    </DragTarget>
  )
}

export default memo(DraggableTask)
