import { memo } from 'react'
import PropTypes from 'prop-types'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Link from './Link'

const propTypes = {
  routeKey: PropTypes.string.isRequired,
  routeParameters: PropTypes.object,
  bottom: PropTypes.string,
  right: PropTypes.string
}

const FloatingButton = ({
  routeKey,
  routeParameters,
  bottom = '30px',
  right = '30px'
}) => {
  const style = { bottom, right, position: 'absolute' }
  return (
    <Link routeKey={routeKey} {...routeParameters}>
      <Fab style={style}>
        <AddIcon />
      </Fab>
    </Link>
  )
}

FloatingButton.propTypes = propTypes

export default memo(FloatingButton)
