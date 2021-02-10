import { selectTaskListData } from './taskList.selectors.js'
import List from '@material-ui/core/List'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { toggleTaskStatus } from './taskActions.js'
import { useActions } from '../../../hooks/useActions.js'

import ListSubheader from '@material-ui/core/ListSubheader'

const TaskList = (provider) => {
  const update = useActions(toggleTaskStatus)
  const taskList = useSelector(selectTaskListData)
  return (

    <List {...provider.droppableProps}>
      <ListSubheader>Drop here 1</ListSubheader>
      <ListSubheader>Drop here 2</ListSubheader>
    </List>
  )

}

export default memo(TaskList)
