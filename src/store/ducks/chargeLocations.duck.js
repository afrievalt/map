import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


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

const url = 'https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10&compact=true&verbose=false&key=c37feaa6-2d65-4697-bfbe-bbf4fa858c31'
export const fetchChargeLocations = (payload) => (dispatch) => {
  dispatch(fetchChargeLocationsRequest(payload))
  return axios.get(url)
    .then((result) => dispatch(fetchChargeLocationsSuccess(result.data)))
    .catch((error) => dispatch(fetchChargeLocationsFailure(error)))
}

export default chargeLocations.reducer
