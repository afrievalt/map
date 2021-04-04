import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const lookupTitle = {
  HOME: 'Home',
  SIGNUP: 'Sign Up',
  SIGNIN: 'Sign In'
}
const Title = () => {
  const locationType = useSelector(state => state.location.type)
  const title = lookupTitle[locationType]
  return (
    <Typography variant='h6' noWrap>
      {title}
    </Typography>
  )
}

export default Title
