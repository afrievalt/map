import { memo } from 'react'
import PropTypes from 'prop-types'
import HomeIcon from '@material-ui/icons/Home'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck'
import EventAvailableIcon from '@material-ui/icons/EventAvailable'
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import PeopleIcon from '@material-ui/icons/People'
import PersonIcon from '@material-ui/icons/Person'

const iconLookup = {
  AccessTime: <AccessTimeIcon />,
  AddCircleOutline: <AddCircleOutlineIcon />,
  Home: <HomeIcon />,
  Settings: <SettingsIcon />,
  PlaylistAddCheck: <PlaylistAddCheckIcon />,
  EventAvailable: <EventAvailableIcon />,
  PlaylistAdd: <PlaylistAddIcon />,
  People: <PeopleIcon />,
  Person: <PersonIcon />
}
const propTypes = {
  iconName: PropTypes.string.isRequired
}

const Icon = ({ iconName = 'Settings' }) => {
  const icon = iconLookup[iconName] || <SettingsIcon />
  return icon
}

Icon.propTypes = propTypes

export default memo(Icon)
