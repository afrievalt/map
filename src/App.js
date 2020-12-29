import './App.css'
import SignUpForm from './pages/SignUpForm'
import SignInForm from './pages/SignInForm'
import { Provider } from 'react-redux'
import store, { rrfProps } from './store/createStore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import FirebaseListener from './controls/FirebaseListener'
import Route from './controls/Route'
import Home from './pages/Home'

function App () {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <FirebaseListener />
        <Route type='HOME'>
          <Home />
        </Route>
        <Route type='SIGNUP'>
          <SignUpForm />
        </Route>
        <Route type='SIGNIN'>
          <SignInForm />
        </Route>
      </ReactReduxFirebaseProvider>
    </Provider>

  )
}

export default App
