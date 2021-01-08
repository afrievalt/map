
export const addStudent = (payload, form) => (dispatch, getState, getFirebase) => {
  const newRef = getFirebase()
    .database()
    .ref('student')
    .push()
  newRef.set(payload)
    .then((x) => console.log('auth.duck.js:46 x: ', x))
    .then(() => dispatch({ type: 'HOME' }))
    .then(form.restart)
    .catch(function (error) {
      const errorMessage = error.message
      window.alert(errorMessage)
      console.log(error)
    })
}

export const setCarOrder = (payload) => (dispatch, getState, getFirebase) => {
  const { date, tagId } = payload
  const newRef = getFirebase()
    .database()
    .ref(date)
    .push(tagId)
  newRef.set(payload)
    .then(() => dispatch({ type: 'HOME' }))
    .catch(function (error) {
      const errorMessage = error.message
      window.alert(errorMessage)
      console.log(error)
    })
}
