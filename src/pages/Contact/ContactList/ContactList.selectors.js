import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectContact = createSelector(selectOrdered, s => s.contact || EMPTY)
const selectData = createSelector(selectFirebase, f => f.data || EMPTY)
const selectCompany = createSelector(selectData, d => d.company || EMPTY)


export const selectContactTableDataRaw = createSelector(selectContact, contactList => contactList.map(contact => ({...contact.value, id: contact.key})))
export const selectContactTableDataOld = createSelector(selectContact, contactList => contactList.map(contact => ({...contact.value, id: contact.key})))

const companyThunk = (allCompanies, contact) => {
  const companyData = allCompanies[contact.employer]
  const employer = companyData?.name || ''
  return { employer }
}
export const selectContactTableData = createSelector(
  selectContactTableDataRaw,
  selectCompany,
  (companyGrid, contact) => companyGrid.map(
    company => ({ ...company, ...companyThunk(contact, company) })
  )
)