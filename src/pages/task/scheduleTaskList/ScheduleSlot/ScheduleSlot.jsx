import React, { memo } from 'react'
import DropTarget from '../../../../controls/DropTarget.jsx'
import SlotList from './SlotList.jsx'

const ScheduleSlot = () => {
  return (
    <DropTarget id='timeSlot'>
      <SlotList />
    </DropTarget>
  )
}

export default memo(ScheduleSlot)
