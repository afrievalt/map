import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectStudent = createSelector(selectOrdered, s => s.student || EMPTY)
export const selectStudentTableData = createSelector(selectStudent, studentList => studentList.map(student => student.value))
