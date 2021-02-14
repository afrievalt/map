import React, { memo } from 'react'
import List from '../../../../controls/List'
import startOfToday from 'date-fns/startOfToday'
import addHours from 'date-fns/addHours'
import ScheduleSlot from './ScheduleSlot'

const schedule = [
  { id: addHours(startOfToday(), 12) },
  { id: addHours(startOfToday(), 15) },
  { id: addHours(startOfToday(), 20) },
  { id: addHours(startOfToday(), 36) },
  { id: addHours(startOfToday(), 39) },
  { id: addHours(startOfToday(), 44) }
]
// selectTimeSlotListData
const ScheduleSlotList = () => {
  return (
    <List data={schedule}>
      <ScheduleSlot />
    </List>
  )
}

export default memo(ScheduleSlotList)
