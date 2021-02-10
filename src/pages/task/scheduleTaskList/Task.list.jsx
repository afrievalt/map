import { selectTaskListData } from './taskList.selectors.js'
import List from '@material-ui/core/List'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import TaskListItem from './TaskListItem.jsx'

const TaskList = (provider) => {
  const taskList = useSelector(selectTaskListData)
  return (

    <List {...provider.droppableProps}>
      {taskList.map((props, i) => {
        return (
          <TaskListItem key={props.id} index={i} {...props} />
        )
      })}
      {provider.placeholder}
    </List>
  )
}

export default memo(TaskList)
