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

  return (
    <li
      ref={dragContext.innerRef}
      {...dragContext.draggableProps}
      {...dragContext.dragHandleProps}
      onClick={handleClickCheckbox(id)}
    >
      {title}
    </li>

  )
}

export default memo(TaskListItem)
