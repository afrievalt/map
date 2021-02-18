import { createSelector } from '@reduxjs/toolkit'
import { createCachedSelector } from 're-reselect'
const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

// const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectData = createSelector(selectFirebase, f => f.data || EMPTY)
const selectTaskData = createSelector(selectData, s => s.task || EMPTY)
const selectTaskSchedule = createSelector(selectData, s => s.taskSchedule || EMPTY)
const selectUnscheduledTasks = createSelector(selectTaskSchedule, s => Object.values(s.unscheduled || EMPTY_OBJECT))
const selectPropTargetId = (s, p) => p.targetId
const selectSlot = createCachedSelector(
  selectTaskSchedule,
  selectPropTargetId,
  (taskSchedule, targetList) => Object.values(taskSchedule[targetList] || {})
)(selectPropTargetId)

const selectLocation = state => state.location || EMPTY_OBJECT
const selectTaskId = createSelector(selectLocation, l => console.log('taskList.selectors.js:20 l: ', l) || l.payload?.taskId)

export const selectTask = createSelector(
  selectTaskData,
  selectTaskId,
  (taskData, taskId) => console.log('taskList.selectors.js:25 : ', taskData, taskId) || taskData[taskId] || EMPTY_OBJECT)

const transformTaskData = (tasksById, allTasks) => allTasks.map(id => {
  const task = tasksById[id]
  const checked = task?.status !== 'todo'
  const indeterminate = task?.status === 'inprogress'
  const color = task?.status === 'done' ? 'green' : 'none'
  return { ...task, indeterminate, checked, color, id }
})
export const selectTaskTableData = createSelector(selectTaskData, taskList => taskList.map(task => ({ ...task.value, id: task.key })))
export const selectTaskListData = createSelector(
  selectTaskData,
  selectUnscheduledTasks,
  transformTaskData
)

export const selectTimeSlotListData = createSelector(
  selectTaskData,
  selectSlot,
  transformTaskData
)
