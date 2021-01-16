import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectFoo = createSelector(selectOrdered, s => s.Foo || EMPTY)
export const selectFooGridData = createSelector(selectFoo, FooGrid => FooGrid.map(Foo => ({...Foo.value, id: Foo.key})))
