import { createSelector } from '@reduxjs/toolkit'

const EMPTY = []
const EMPTY_OBJECT = {}
const selectFirebase = state => state.firebase || EMPTY_OBJECT

const selectOrdered = createSelector(selectFirebase, f => f.ordered || EMPTY)
const selectCompany = createSelector(selectOrdered, s => s.Company || EMPTY)
export const selectCompanyGridData = createSelector(selectCompany, CompanyGrid => CompanyGrid.map(Company => ({...Company.value, id: Company.key})))
