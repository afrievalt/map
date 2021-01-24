import ListItem from '@material-ui/core/ListItem'
import { useActions } from '../hooks/useActions'
const makeActionCreator = type => () => ({ type })
const ListItemLink = ({ routeKey, children }) => {
  const handleClick = useActions(makeActionCreator(routeKey))
  return (<ListItem button onClick={handleClick}>{children}</ListItem>)
}

export default ListItemLink
