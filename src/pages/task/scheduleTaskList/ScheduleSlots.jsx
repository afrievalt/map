import { selectTaskListData } from './taskList.selectors.js'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { toggleTaskStatus } from './taskActions.js'
import { useActions } from '../../../hooks/useActions.js'
import { Draggable } from 'react-beautiful-dnd'

const TaskList = (provider) => {
  const update = useActions(toggleTaskStatus)
  const handleClickCheckbox = (id, isChecked) => () => {
    update(id, isChecked)
  }
  const taskList = useSelector(selectTaskListData)
  return (

    <List {...provider.droppableProps}>
      {taskList.map(({ title, id, checked, indeterminate, color }, i) => {
        const labelId = `checkbox-list-label-${id}`
        return (
          <Draggable key={id} draggableId={id} index={i}>
            {(provided) => (
              <>
                {provided.placeholder}
                <ListItem
                  ContainerProps={{ ref: provided.innerRef }}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  role={undefined}
                  dense
                  button
                  onClick={handleClickCheckbox(id)}
                >
                  <ListItemText id={labelId} primary={title} />                  
              </>
            )}
          </Draggable>
        )
      })}
      {provider.placeholder}
    </List>
  )
}

export default memo(TaskList)
