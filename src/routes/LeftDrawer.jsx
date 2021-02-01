import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import useStyles from '../controls/TwoColumnLayout/useStyles'
import SettingsIcon from '@material-ui/icons/Settings'
import HomeIcon from '@material-ui/icons/Home'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import ListItemLink from '../controls/ListItemLink'

function LeftDrawer (props) {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItemLink routeKey='HOME'>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItemLink>
        <ListItemLink routeKey='SIGNIN'>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary='Account' />
        </ListItemLink>
        <ListItemLink routeKey='CONTACT_ADD'>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary='Add Contact' />
        </ListItemLink>
        <ListItemLink routeKey='CONTACT'>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary='Contacts' />
        </ListItemLink>
        <ListItemLink routeKey='COMPANY_ADD'>
          <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
          <ListItemText primary='Company' />
        </ListItemLink>
        <ListItemLink routeKey='COMPANY'>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary='Company' />
        </ListItemLink>
        <ListItemLink routeKey='TASK_ADD'>
          <ListItemIcon><AddCircleOutlineIcon /></ListItemIcon>
          <ListItemText primary='Task' />
        </ListItemLink>
      </List>
      <Divider />

    </div>
  )
}

LeftDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
}

export default LeftDrawer
