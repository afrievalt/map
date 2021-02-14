import { cloneElement, Children } from 'react'

const List = ({ data, children }) => {
  const child = Children.only(children)
  const childList = data.map((value, index) => cloneElement(child, { ...value, index }))
  return Children.toArray(childList)
}

export default List
