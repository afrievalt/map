import React from 'react'

const Options = ({ data }) => {
  return data.map(({ key, value, display }) => (
    <option key={key} value={value}>{display}</option>
  ))
}

export default Options
