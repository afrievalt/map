import React from 'react'

const Options = ({ data }) => {
  return data.map(({ key, value, label }) => (
    <option key={key} value={value}>{label}</option>
  ))
}

export default Options
