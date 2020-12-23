import {createSlice} from '@reduxjs/toolkit';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAx5LrJQ2DOJYzqMxo6q13tExPGxW1ob5Q",
  authDomain: "new-project-fe3eb.firebaseapp.com",
  databaseURL: "https://new-project-fe3eb.firebaseio.com",
  projectId: "new-project-fe3eb",
  storageBucket: "new-project-fe3eb.appspot.com",
  messagingSenderId: "79922788915",
  appId: "1:79922788915:web:b1f48d340ef53515750146"
};

//move to firebase actions???
firebase.initializeApp(firebaseConfig);

export const initialState = {
  foundAuth: null,
  loading: false,
  error: null,
  selected: null
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    selectAuth(state, action) {
      const {payload} = action || {};
      state.selected = payload;
    }
  }
});

export const {
  selectAuth
} = auth.actions;

export const createUserAccount = (payload) => {
  const {email, password} = payload;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((x)=>console.log('auth.duck.js:46 x: ',  x))
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
}

export default auth.reducer;
