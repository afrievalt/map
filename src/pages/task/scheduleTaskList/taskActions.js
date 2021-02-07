export const upsertTask = (payload, form) => (dispatch, getState, getFirebase) => {
  const newRef = getFirebase()
    .database()
    .ref('task')
    .push()
  newRef.set(payload)
    .then(form.restart)
    .catch(function (error) {
      const errorMessage = error.message
      window.alert(errorMessage)
      console.log(error)
    })
}

const nextStatusLookup = {
  todo: 'inprogress',
  inprogress: 'done',
  done: 'todo'
}
const getNextStatus = (id, getState) => {
  const oldStatus = getState().firebase.data.task[id].status
  return nextStatusLookup[oldStatus] || 'todo'
}
export const toggleTaskStatus = (id, isChecked) => (dispatch, getState, getFirebase) => {
  const nextStatus = getNextStatus(id, getState)
  getFirebase()
    .database()
    .ref(`task/${id}/status`)
    .set(nextStatus)
}
