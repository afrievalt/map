import React, { memo } from 'react'
import DragTarget from '../../../controls/DragTarget'
import TaskListItem from './TaskListItem.jsx'
const DraggableTask = (props) => {
  const { id, index } = props
  return (
    <DragTarget dragId={id} index={index}>
      <TaskListItem {...props} />
    </DragTarget>
  )
}

export default memo(DraggableTask)