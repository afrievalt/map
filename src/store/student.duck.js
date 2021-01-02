
export const addStudent = (payload) => (dispatch, getState, getFirebase) => {
  const newRef = getFirebase()
    .database()
    .ref('student')
    .push()
  newRef.set(payload)
    .then((x) => console.log('auth.duck.js:46 x: ', x))
    .then(() => dispatch({ type: 'HOME' }))
    .catch(function (error) {
      const errorMessage = error.message
      window.alert(errorMessage)
      console.log(error)
    })
}
