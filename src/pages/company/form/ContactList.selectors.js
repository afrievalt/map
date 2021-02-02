import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectContact = createSelector(selectOrdered, s => s.contact || EMPTY)
export const selectContactOptionsData = createSelector(
  selectContact,
  contactList => console.log('ContactList.selectors.js:11 contactList: ', contactList) || contactList.map(({ key, value }) => {
    console.log('ContactList.selectors.js:12 dey, value: ', key, value)
    return {
      label: `${value.lastName}, ${value.firstName}`,
      key: key,
      value: key
    }
  }
  )
)
