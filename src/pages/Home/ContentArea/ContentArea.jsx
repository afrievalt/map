import React from 'react'
import { useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemLink from '../../../controls/ListItemLink'
import styled from 'styled-components'
import Box from '../../../controls/LayoutAtoms/Box'
import { selectChargeLocationsForContentArea } from './contentArea.selectors'

const BlockSpan = styled.span`
  display: block;
`
const Container = styled(Box)`
  width: 20vw;
`
function ContentArea () {
  const locations = useSelector(selectChargeLocationsForContentArea)
  return (
    <Container>
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
    </Container>
  )
}

export default ContentArea
