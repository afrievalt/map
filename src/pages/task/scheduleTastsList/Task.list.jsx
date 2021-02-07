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

const TaskList = () => {
  const update = useActions(toggleTaskStatus)
  const handleClickCheckbox = (id, isChecked) => () => {
    update(id, isChecked)
  }
  const taskList = useSelector(selectTaskListData)
  console.log('Task.list.jsx:20 taskList: ', taskList)
  return (

    <List>
      {taskList.map(({ title, id, checked, indeterminate, color }) => {
        const labelId = `checkbox-list-label-${id}`
        console.log('Task.list.jsx:30 color, title: ', color, title)
        return (
          <ListItem key={title} role={undefined} dense button onClick={handleClickCheckbox(id)}>
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
              <IconButton edge='end' aria-label='comments'>
                <CommentIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  )
}

export default memo(TaskList)
