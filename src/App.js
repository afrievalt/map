import logo from './logo.svg';
import './App.css';
import SignUpForm from './pages/SignUpForm';
import {Provider} from 'react-redux'
import store from './store/createStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SignUpForm/>
      </div>
    </Provider>

  );
}

export default App;
