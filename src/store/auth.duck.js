export const createUserAccount = (payload) => (dispatch, getState, getFirebase) => {
  const { email, password } = payload
  getFirebase()
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((x) => console.log('auth.duck.js:46 x: ', x))
    .then(() => dispatch({ type: 'HOME' }))
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message

      if (errorCode === 'auth/weak-password') {
        window.alert('The password is too weak.')
      } else {
        window.alert(errorMessage)
      }
      console.log(error)
    })
}

export const signInAccount = (payload) => (dispatch, getState, getFirebase) => {
  const { email, password } = payload
  getFirebase()
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((x) => console.log('auth.duck.js:46 x: ', x))
    .then(() => dispatch({ type: 'HOME' }))
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message

      if (errorCode === 'auth/weak-password') {
        window.alert('The password is too weak.')
      } else {
        window.alert(errorMessage)
      }
      console.log(error)
    })
}

export const signOut = () => (dispatch, getState, getFirebase) => {
  getFirebase()
    .auth()
    .signOut()
    .then(() => dispatch({ type: 'HOME' }))
    .catch(function (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message

      if (errorCode === 'auth/weak-password') {
        window.alert('The password is too weak.')
      } else {
        window.alert(errorMessage)
      }
      console.log(error)
    })
}
