import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import DraggableTask from '../DraggableTask.jsx'
import { ListSubheader } from '@material-ui/core'
import { selectTimeSlotListData } from '../taskList.selectors.js'
import List from '@material-ui/core/List'

// selectTimeSlotListData
const SlotList = ({ dropContext }) => {
  const taskList = useSelector(selectTimeSlotListData)
  return (
    <List {...dropContext.droppableProps}>
      <ListSubheader>Time slot here</ListSubheader>
      {taskList.map((props, i) => {
        return (
          <DraggableTask key={props.id} index={i} {...props} />
        )
      })}
      {dropContext.placeholder}
    </List>
  )
}

export default memo(SlotList)
