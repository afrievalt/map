import { useFirebaseConnect } from 'react-redux-firebase'

const FirebaseListener = () => {
  useFirebaseConnect([
    {
      path: 'student'
    },
    {
      path: 'contact'
    },
    {
      path: 'company'
    }
  ])
  return null
}

export default FirebaseListener
