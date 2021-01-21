import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectData = createSelector(selectFirebase, f => f.data || EMPTY)
const selectContact = createSelector(selectData, d => d.contact || EMPTY)

const selectCompany = createSelector(selectOrdered, s => s.company || EMPTY)
export const selectCompanyDataRaw = createSelector(selectCompany, CompanyGrid => CompanyGrid.map(Company => ({ ...Company.value, id: Company.key })))

export const selectCompanyGridDataOld = createSelector(selectCompanyDataRaw, companyGrid => companyGrid)

const contactThunk = (allContacts, company) => {
  const contactData = allContacts[company.contact]
  const contact = contactData ? `${contactData.lastName || ''}, ${contactData.firstName || ''}` : ''
  return { contact }
}
export const selectCompanyGridData = createSelector(
  selectCompanyDataRaw,
  selectContact,
  (companyGrid, contact) => companyGrid.map(
    company => ({ ...company, ...contactThunk(contact, company) })
  )
)
