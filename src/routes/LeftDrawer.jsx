import React from 'react'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import useStyles from '../controls/TwoColumnLayout/useStyles'
import ListItemLink from '../controls/ListItemLink'
import Icon from '../controls/Icon'
import ListItemIcon from '@material-ui/core/ListItemIcon'

function LeftDrawer () {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItemLink routeKey='HOME'>
          <ListItemIcon><Icon iconName='Home' /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItemLink>
        <ListItemLink routeKey='SIGNIN'>
          <ListItemIcon><Icon iconName='Settings' /></ListItemIcon>
          <ListItemText primary='Sign in' />
        </ListItemLink>
      </List>
      <Divider />

    </div>
  )
}

export default LeftDrawer
