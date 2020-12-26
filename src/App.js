import './App.css'
import SignUpForm from './pages/SignUpForm'
import { Provider } from 'react-redux'
import store, { rrfProps } from './store/createStore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import FirebaseListener from './controls/FirebaseListener'

function App () {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <FirebaseListener />
        <div className='App'>
          <SignUpForm />
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>

  )
}

export default App
