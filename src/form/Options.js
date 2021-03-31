/* eslint-disable react/jsx-key */
import React, { Children } from 'react'

const isString = item => typeof item === 'string'
const Options = ({ data }) => {
  return Children.toArray(
    data.map((item) => {
      const itemObject = isString(item)
        ? { value: item, label: item }
        : item
      const { value, label } = itemObject
      return (
        <option value={value}>{label}</option>
      )
    })
  )
}

export default Options
