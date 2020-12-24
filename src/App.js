import logo from './logo.svg';
import './App.css';
import SignUpForm from './pages/SignUpForm';
import {Provider} from 'react-redux'
import store from './store/createStore';
import {ReactReduxFirebaseProvider, useFirebaseConnect} from 'react-redux-firebase'
import firebase from 'firebase/app'
import firebaseConfig from './store/firebaseConfig';
import FirebaseListener from './controls/FirebaseListener';

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch
  // createFirestoreInstance // <- needed if using firestore
}

//move to firebase actions???
firebase.initializeApp(firebaseConfig);

function App() {


  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <FirebaseListener />
        <div className="App">
          <SignUpForm/>
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>

  );
}

export default App;
