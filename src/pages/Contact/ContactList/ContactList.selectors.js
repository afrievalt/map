import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectContact = createSelector(selectOrdered, s => s.contact || EMPTY)
export const selectContactTableData = createSelector(selectContact, contactList => contactList.map(contact => ({...contact.value, id: contact.key})))
