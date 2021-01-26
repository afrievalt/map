import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

const lookupTitle = {
  HOME: 'Home',
  COMPANY_ADD: 'Add Company',
  COMPANY_EDIT: 'Edit Company',
  COMPANY: 'Company',
  CONTACT_ADD: 'Add Contact',
  CONTACT_EDIT: 'Edit Contact',
  CONTACT: 'Contact',
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
