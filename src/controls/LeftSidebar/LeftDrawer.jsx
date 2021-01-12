import React from 'react'
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import useStyles from './useStyles'
import Link from 'redux-first-router-link'
import SettingsIcon from '@material-ui/icons/Settings'
import HomeIcon from '@material-ui/icons/Home';

function LeftDrawer (props) {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />

      <List>
        <ListItem button component={Link} to='/'>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        <ListItem button component={Link} to='/admin/signin'>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary='Account' />
        </ListItem>
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
