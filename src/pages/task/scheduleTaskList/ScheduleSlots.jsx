import { selectTaskListData } from './taskList.selectors.js'
import List from '@material-ui/core/List'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { toggleTaskStatus } from './taskActions.js'
import { useActions } from '../../../hooks/useActions.js'

import ListSubheader from '@material-ui/core/ListSubheader'
import DragTarget from '../../../controls/DragTarget.jsx'
import SlotTarget from './SlotTarget'

const ScheduleSlots = ({ dropContext }) => {
  const update = useActions(toggleTaskStatus)
  const taskList = useSelector(selectTaskListData)
  return (

    <List {...dropContext.droppableProps}>
      <DragTarget dragId='slot1' index={0}>
        <SlotTarget />
      </DragTarget>
      <ListSubheader>Drop here 2</ListSubheader>
    </List>
  )
}

export default memo(ScheduleSlots)
