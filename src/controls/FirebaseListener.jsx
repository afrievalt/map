import { useFirebaseConnect } from 'react-redux-firebase'

const FirebaseListener = () => {
  useFirebaseConnect([
    {
      path: 'student'
    }
  ])
  return null
}

export default FirebaseListener
