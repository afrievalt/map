import { Container } from '@material-ui/core'
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
import MiniTaskForm from './MiniTask.form.jsx'
import { useSelector } from 'react-redux'

const temp = () => 0

const TaskList = () => {
  const taskList = useSelector(selectTaskListData)
  console.log('Task.list.jsx:20 taskList: ', taskList)
  return (
    <Container>
      <MiniTaskForm />
      <List>
        {taskList.map(({ title, id, done }) => {
          const labelId = `checkbox-list-label-${id}`

          return (
            <ListItem key={title} role={undefined} dense button onClick={temp}>
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  checked={done}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
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
    </Container>
  )
}

export default memo(TaskList)
