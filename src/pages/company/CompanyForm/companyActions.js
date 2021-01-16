export const upsertCompany = (payload, form) => (dispatch, getState, getFirebase) => {
  const newRef = getFirebase()
    .database()
    .ref('company')
    .push()
  newRef.set(payload)
    .then(() => dispatch({ type: 'HOME' }))
    .then(form.restart)
    .catch(function (error) {
      const errorMessage = error.message
      window.alert(errorMessage)
      console.log(error)
    })
}