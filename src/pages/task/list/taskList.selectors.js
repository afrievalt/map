import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectTask = createSelector(selectOrdered, s => s.task || EMPTY)
export const selectTaskTableData = createSelector(selectTask, taskList => taskList.map(task => ({ ...task.value, id: task.key })))
export const selectTaskListData = createSelector(selectTaskTableData,
  taskList => taskList.map(task => {
    const done = task.status === 'done'
    return { ...task, done }
  })
)
