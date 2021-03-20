import { useSelector } from 'react-redux'
import { memo } from 'react'
import PropTypes from 'prop-types'
import { makeArray } from '../utility/convert'

const propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.bool
}

const Route = ({ type, children, exact = false }) => {
  const locationType = useSelector(state => state.location.type)
  const hasPath = !!~makeArray(type)
    .findIndex(
      o => exact ? o === locationType : locationType.startsWith(o)
    )
  return hasPath ? children : null
}

Route.propTypes = propTypes

export default memo(Route)
// <Route type='FOO'>
//  <Foo/>
// </Route>
// when no exact: will display url id starts with FOO. (ex: FOO_ADD, FOO_EDIT)

// <Route type=['BAR, BOO'] exact>
//   <Foo/>
// </Route>
// when type is array: will display url id of BAR and BOO only
