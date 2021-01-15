import { useFirebaseConnect } from 'react-redux-firebase'

const FirebaseListener = () => {
  useFirebaseConnect([
    {
      path: 'student'
    },
    {
      path: 'contact'
    },
  ])
  return null
}

export default FirebaseListener
