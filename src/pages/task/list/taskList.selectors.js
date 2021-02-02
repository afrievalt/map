import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectTask = createSelector(selectOrdered, s => s.Task || EMPTY)
export const selectTaskTableData = createSelector(selectTask, TaskList => TaskList.map(Task => ({...Task.value, id: Task.key})))
