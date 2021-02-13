import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectData = createSelector(selectFirebase, f => f.data || EMPTY)
const selectTask = createSelector(selectData, s => s.task || EMPTY)
const selectBacklog = createSelector(selectOrdered, s => s.backlog || EMPTY)

// temp
const selectTimeSlot = createSelector(selectOrdered, s => s.timeSlot || EMPTY)

const transformTaskData = (tasksById, allTasks) => allTasks.map(taskId => {
  const id = taskId.value
  const task = tasksById[id]
  const checked = task?.status !== 'todo'
  const indeterminate = task?.status === 'inprogress'
  const color = task?.status === 'done' ? 'green' : 'none'
  return { ...task, indeterminate, checked, color, id }
})
export const selectTaskTableData = createSelector(selectTask, taskList => taskList.map(task => ({ ...task.value, id: task.key })))
export const selectTaskListData = createSelector(
  selectTask,
  selectBacklog,
  transformTaskData
)

export const selectTimeSlotListData = createSelector(
  selectTask,
  selectTimeSlot,
  transformTaskData
)
