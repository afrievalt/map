import { Children, cloneElement } from 'react'
import { useActions } from '../hooks/useActions'
const makeActionCreator = (type, payload) => () => ({ type, payload })
const Link = ({ routeKey, children, ...routeParameters }) => {
  const child = Children.only(children)
  const handleClick = useActions(makeActionCreator(routeKey, routeParameters))
  return cloneElement(child, { onClick: handleClick })
}

export default Link

// <Link routeKey="TASK_EDIT" taskId={5}>
//  <Task />                    // task will get passed an on click
// </Link>
//
//  route paths:
//    TASK_EDIT: '/task/:taskId',
//   url:
//      task/5
