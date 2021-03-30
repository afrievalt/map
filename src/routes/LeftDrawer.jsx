import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import useStyles from '../controls/TwoColumnLayout/useStyles'
import ListItemLink from '../controls/ListItemLink'
import Icon from '../controls/Icon'
import ListItemIcon from '@material-ui/core/ListItemIcon'

function LeftDrawer (props) {
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
          <ListItemText primary='Account' />
        </ListItemLink>
        <ListItemLink routeKey='CONTACT_ADD'>
          <ListItemIcon><Icon iconName='Settings' /></ListItemIcon>
          <ListItemText primary='Add Contact' />
        </ListItemLink>
        <ListItemLink routeKey='CONTACT'>
          <ListItemIcon><Icon iconName='Settings' /></ListItemIcon>
          <ListItemText primary='Contacts' />
        </ListItemLink>
        <ListItemLink routeKey='COMPANY_ADD'>
          <ListItemIcon><Icon iconName='AddCircleOutline' /></ListItemIcon>
          <ListItemText primary='Company' />
        </ListItemLink>
        <ListItemLink routeKey='COMPANY'>
          <ListItemIcon><Icon iconName='Settings' /></ListItemIcon>
          <ListItemText primary='Company' />
        </ListItemLink>
        <ListItemLink routeKey='TASK_ADD'>
          <ListItemIcon><Icon iconName='PlaylistAdd' /></ListItemIcon>
          <ListItemText primary='Add Task' />
        </ListItemLink>
        <ListItemLink routeKey='TASK'>
          <ListItemIcon><Icon iconName='PlaylistAddCheck' /></ListItemIcon>
          <ListItemText primary='Tasks' />
        </ListItemLink>
        <ListItemLink routeKey='PLAN'>
          <ListItemIcon><Icon iconName='EventAvailable' /></ListItemIcon>
          <ListItemText primary='Task Planning' />
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
