import React, { memo } from 'react'
import DropTarget from '../../../../controls/DropTarget.jsx'
import SlotList from './SlotList.jsx'
import { formatDateTime } from '../../../../utility/format'

const ScheduleSlot = ({ id }) => {
  const label = formatDateTime(id)
  return (
    <DropTarget id='timeSlot'>
      <SlotList label={label} />
    </DropTarget>
  )
}

export default memo(ScheduleSlot)
