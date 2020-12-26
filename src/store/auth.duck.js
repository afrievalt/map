import {createSlice} from '@reduxjs/toolkit';

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
      const {payload} = action || {}
      state.selected = payload
    }
  }
});

export const {
  selectAuth
} = auth.actions;

export const createUserAccount = (payload) => (dispatch, getState, getFirebase) => {
  const {email, password} = payload;
  console.log('auth.duck.js:27 payload: ', payload);
  getFirebase()
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((x) => console.log('auth.duck.js:46 x: ', x))
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
