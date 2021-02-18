import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import React, { memo } from 'react'
import { toggleTaskStatus } from './taskActions.js'
import { useActions } from '../../../hooks/useActions.js'
import Link from '../../../controls/Link.jsx'
const TaskListItem = ({ id, dragContext, index, indeterminate, checked, color, title }) => {
  const update = useActions(toggleTaskStatus)
  const handleClickCheckbox = (id, isChecked) => () => {
    update(id, isChecked)
  }

  const labelId = `checkbox-list-label-${id}`
  return (
    <ListItem
      ContainerProps={{ ref: dragContext.innerRef }}
      {...dragContext.draggableProps}
      {...dragContext.dragHandleProps}
      role={undefined}
      dense
      button
      onClick={handleClickCheckbox(id)}
    >
      <ListItemIcon>
        <Checkbox
          edge='start'
          color='primary'
          indeterminate={indeterminate}
          checked={checked}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
          style={{ color }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={title} />
      <ListItemSecondaryAction>
        <Link routeKey='TASK_EDIT' taskId={id}>
          <IconButton edge='end' aria-label='comments'>
            <ArrowForwardIosIcon />
          </IconButton>
        </Link>
      </ListItemSecondaryAction>
    </ListItem>

  )
}

export default memo(TaskListItem)
