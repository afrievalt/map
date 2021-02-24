import { selectTaskListData } from './taskList.selectors.js'
import List from '@material-ui/core/List'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import DraggableTask from './DraggableTask.jsx'

// WAT? why does tis work without named params?
const TaskList = ({ dropContext }) => {
  const taskList = useSelector(selectTaskListData)
  return (
    <List {...dropContext.droppableProps}>
      {taskList.map((props, i) => {
        return (
          <DraggableTask key={props.id} index={i} {...props} />
        )
      })}
      {dropContext.placeholder}
    </List>
  )
}

export default memo(TaskList)
