import { createSelector } from '@reduxjs/toolkit'
import { createCachedSelector } from 're-reselect'
const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectData = createSelector(selectFirebase, f => f.data || EMPTY)
const selectTask = createSelector(selectData, s => s.task || EMPTY)
const selectTaskSchedule = createSelector(selectData, s => s.taskSchedule || EMPTY)
const selectUnscheduledTasks = createSelector(selectTaskSchedule, s => Object.values(s.unscheduled || EMPTY_OBJECT))
const selectPropTargetId = (s, p) => p.targetId
const selectSlot = createCachedSelector(
  selectTaskSchedule,
  selectPropTargetId,
  (taskSchedule, targetList) => Object.values(taskSchedule[targetList] || {})
)(selectPropTargetId)

const transformTaskData = (tasksById, allTasks) => allTasks.map(id => {
  const task = tasksById[id]
  const checked = task?.status !== 'todo'
  const indeterminate = task?.status === 'inprogress'
  const color = task?.status === 'done' ? 'green' : 'none'
  return { ...task, indeterminate, checked, color, id }
})
export const selectTaskTableData = createSelector(selectTask, taskList => taskList.map(task => ({ ...task.value, id: task.key })))
export const selectTaskListData = createSelector(
  selectTask,
  selectUnscheduledTasks,
  transformTaskData
)

export const selectTimeSlotListData = createSelector(
  selectTask,
  selectSlot,
  transformTaskData
)
