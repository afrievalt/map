import React, { memo } from 'react'
import ListSubheader from '@material-ui/core/ListSubheader'
const temp = [
  { title: 'Today - 10:00 am' },
  { title: 'Today - 4:00 pm' },
  { title: 'Today - 8:00 pm' }
]
const SlotTarget = ({ dragContext }) => {
  return (
    <ListSubheader
      ref={dragContext.innerRef}
      {...dragContext.draggableProps}
    >
      Drop here 1
    </ListSubheader>
  )
}

export default memo(SlotTarget)
