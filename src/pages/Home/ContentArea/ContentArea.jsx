import React from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import { useSelector } from 'react-redux'
import ListItemLink from '../../../controls/ListItemLink'
import { selectChargeLocationsForContentArea } from './contentArea.selectors'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'

const BlockSpan = styled.span`
  display: block;
`

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
              <ListItemText
                primary={l.title}
                secondary={l.details.map(d => <BlockSpan key={d}>{d}</BlockSpan>)}
              />

            </ListItemLink>
          ))
        }
      </List>
      <Divider />

    </div>
  )
}

export default LeftDrawer
