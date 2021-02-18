import ListItem from '@material-ui/core/ListItem'
import Link from './Link'
const ListItemLink = ({ routeKey, routeParameters, children }) => {
  return (
    <Link routeKey={routeKey} {...routeParameters}>
      <ListItem button>{children}</ListItem>
    </Link>
  )
}

export default ListItemLink
