import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'
import useStyles from './useStyles'
import Link from 'redux-first-router-link'


import SettingsIcon from '@material-ui/icons/Settings'

function LeftDrawer (props) {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />

      <List>
        <ListItem button component={Link} to='/admin/signin'>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary='Account' />
        </ListItem>
        {['xxx', 'Contacts', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
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
