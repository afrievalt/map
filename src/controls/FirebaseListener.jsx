import { useFirebaseConnect } from 'react-redux-firebase'

const FirebaseListener = () => {
  useFirebaseConnect([
    {
      path: 'cms'
    }
  ])
  return null
}

export default FirebaseListener
