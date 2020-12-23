import { createSlice } from '@reduxjs/toolkit';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
var firebaseConfig = {
  apiKey: "AIzaSyBUcx6W7j6kqR1EISPkPoTjnvDouwhjkvk",
  authDomain: "very-new.firebaseapp.com",
  databaseURL: "https://very-new.firebaseio.com",
  projectId: "very-new",
  storageBucket: "very-new.appspot.com",
  messagingSenderId: "589076712176",
  appId: "1:589076712176:web:04ecf1843b9ecfdb"
};


//move to firebase actions???
firebase.initializeApp(firebaseConfig);

export const initialState = {
	foundAuth: null,
	loading: false,
	error: null,
	selected: null,
};

const auth = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		selectAuth(state, action) {
			const { payload } = action || {};
			state.selected = payload;
		},
	}
});

export const { selectAuth } = auth.actions;


export const createUserAccount = (payload) => {
	const {email, password} = payload;
	firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
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
