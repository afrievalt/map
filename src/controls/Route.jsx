import { useSelector } from 'react-redux'
import { makeArray } from '../utility/convert'

const Route = ({ type, children }) => {
  const locationType = useSelector(state => state.location.type)
  const hasPath = !!~makeArray(type).findIndex(o => o === locationType)
  return hasPath ? children : null
}

export default Route
