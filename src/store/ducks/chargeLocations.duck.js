import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { openChangeMapKey } from '../../.secretes'

export const initialState = {
  foundChargeLocations: [],
  loading: false,
  error: null,
  selected: null
}

const chargeLocations = createSlice({
  name: 'chargeLocations',
  initialState,
  reducers: {
    selectChargeLocations (state, action) {
      const { payload } = action || {}
      state.selected = payload
    },
    fetchChargeLocationsRequest (state, { payload }) {
      state.loading = true
      state.error = null
    },
    fetchChargeLocationsSuccess (state, action) {
      const { payload = [] } = action || {}
      state.foundChargeLocations = payload
      state.loading = false
      state.error = null
    },
    fetchChargeLocationsFailure (state, action) {
      state.loading = false
      state.error = action.payload
    }
  }
})

const { fetchChargeLocationsRequest } = chargeLocations.actions
export const { fetchChargeLocationsSuccess, fetchChargeLocationsFailure } = chargeLocations.actions

const baseUrl = 'https://api.openchargemap.io/v3/poi/?output=json&camelCase=true&compact=true&cammelCase=true&countrycode=US&maxresults=10&compact=true&verbose=false'
export const fetchChargeLocations = (search) => (dispatch) => {
  const url = `${baseUrl}&latitude=${search.lat}&longitude=${search.lng}&distance=50&key=${openChangeMapKey}`
  console.log('inFetch', { search })
  dispatch(fetchChargeLocationsRequest())
  return axios.get(url)
    .then((result) => dispatch(fetchChargeLocationsSuccess(result.data)))
    .then(() => dispatch({ type: 'HOME' }))
    .catch((error) => dispatch(fetchChargeLocationsFailure(error)))
}

export default chargeLocations.reducer
