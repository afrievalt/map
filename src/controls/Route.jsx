import { useSelector } from 'react-redux'
import { makeArray } from '../utility/convert'
import PropTypes from 'prop-types'

const propTypes = {
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string
}
const Route = ({ type, children, exact = false }) => {
  const locationType = useSelector(state => state.location.type)
  const hasPath = !!~makeArray(type)
    .findIndex(
      o => exact ? o === locationType : o.startsWith(locationType)
    )
  return hasPath ? children : null
}

Route.propTypes = propTypes

export default Route
// <Route type='FOO'>
//  <Foo/>
// </Route>
// when no exact: will display url id starts with FOO. (ex: FOO_ADD, FOO_EDIT)

// <Route type=['BAR, BOO'] exact>
//   <Foo/>
// </Route>
// when type is array: will display url id of BAR and BOO only
