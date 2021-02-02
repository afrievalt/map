import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectCompany = createSelector(selectOrdered, s => s.company || EMPTY)
export const selectCompanyOptionsData = createSelector(
  selectCompany,
  companyList => companyList.map(({ key, value }) => {
    return {
      label: value.name,
      key: key,
      value: key
    }
  }
  )
)
