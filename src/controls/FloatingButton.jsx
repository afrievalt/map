import { memo } from 'react'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Link from './Link'

const propTypes = {
  routeKey: PropTypes.string.isRequired,
  routeParameters: PropTypes.object
}

const FloatingButton = ({ routeKey, routeParameters }) => {
  return (
    <Link routeKey={routeKey} {...routeParameters}>
      <Fab>
        <AddIcon />
      </Fab>
    </Link>
  )
}

FloatingButton.propTypes = propTypes

export default memo(FloatingButton)
