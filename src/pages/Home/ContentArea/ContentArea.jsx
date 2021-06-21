import React from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import { useSelector } from 'react-redux'
import ListItemLink from '../../../controls/ListItemLink'
import { selectChargeLocationsForContentArea } from './contentArea.selectors'
function LeftDrawer () {
  const locations = useSelector(selectChargeLocationsForContentArea)
  return (
    <div>
      <Divider />
      <List>
        {
          locations.map(l => (
            <ListItemLink
              routeKey='STATION'
              routeParameters={{ id: l.id }}
              key={l.id}
            >
              <ListItemText primary={l.title} />
            </ListItemLink>
          ))
        }
      </List>
      <Divider />

    </div>
  )
}

export default LeftDrawer
