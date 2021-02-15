import React, { memo } from 'react'
import { connect, useSelector } from 'react-redux'
import DraggableTask from '../DraggableTask.jsx'
import { ListSubheader } from '@material-ui/core'
import { selectTimeSlotListData } from '../taskList.selectors.js'
import List from '@material-ui/core/List'

const SlotList = ({ dropContext, label, taskList }) => {
  // const taskList = useSelector(selectTimeSlotListData)
  return (
    <List {...dropContext.droppableProps}>
      <ListSubheader>{label}</ListSubheader>
      {taskList.map((props, i) => {
        return (
          <DraggableTask key={props.id} index={i} {...props} />
        )
      })}
      {dropContext.placeholder}
    </List>
  )
}

const mapPropsToState = (state, ownProps) => ({
  taskList: selectTimeSlotListData(state, ownProps)
})
export default memo(connect(mapPropsToState)(SlotList))
