import React from 'react'
import Route from '../controls/Route'
import RightSidebar from '../controls/TwoColumnLayout/RighSidebar'
import TaskEditForm from '../pages/task/form/TaskEdit.form'
import ScheduleSlotList from '../pages/task/scheduleTaskList/ScheduleSlotList/ScheduleSlotList'

const RightColumn = ({ type, children }) => (
  <>
    <Route type='TASK_EDIT'>
      <RightSidebar>
        <TaskEditForm />
      </RightSidebar>
    </Route>
    <Route type='PLAN'>
      <ScheduleSlotList />
    </Route>
  </>

)

export default React.memo(RightColumn)
