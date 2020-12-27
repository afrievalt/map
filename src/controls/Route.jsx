import React from 'react'
import { useSelector } from 'react-redux'

const Route = ({ type, children }) => {
  const locationType = useSelector(state => state.location.type)
  return locationType === type ? children : null
}

export default Route
