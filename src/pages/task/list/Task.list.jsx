import { Button, Container, CssBaseline } from '@material-ui/core'
import { selectTaskTableData } from './taskList.selectors.js'
import React, { memo } from 'react'
import MiniTaskForm from './MiniTask.form.jsx'

const TaskList = () => {
  return (
    <Container>
      <MiniTaskForm />
    </Container>
  )
}

export default memo(TaskList)
