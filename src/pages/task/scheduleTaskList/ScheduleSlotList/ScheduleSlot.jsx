import React, { memo } from 'react'
import DropTarget from '../../../../controls/DropTarget.jsx'
import SlotList from './SlotList.jsx'
import { formatDateTime, formatIso } from '../../../../utility/format'

const ScheduleSlot = ({ id }) => {
  const label = formatDateTime(id)
  const targetId = formatIso(id)
  return (
    <DropTarget id={targetId}>
      <SlotList label={label} targetId={targetId} />
    </DropTarget>
  )
}

export default memo(ScheduleSlot)
