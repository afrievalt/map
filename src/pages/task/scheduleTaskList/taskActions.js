export const upsertTask = (payload, form) => (dispatch, getState, getFirebase) => {
  const db = getFirebase()
    .database()
  const newRef = db.ref('task')
    .push()
  db.ref('backlog')
    .push(newRef.key)
  console.log('taskActions.js:6 ssss newRef.val(): ', newRef.key)

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

const getNewTaskOrder = (result, getState) => {
  const { destination, source, draggableId } = result
  const { droppableId, index } = destination || {}
  const newTaskOrder = getState().firebase.data.task_order
  return newTaskOrder
}
export const dragEnd = (result) => (dispatch, getState, getFirebase) => {
  const taskOrder = getNewTaskOrder(result, getState)
  getFirebase()
    .database()
    .ref('task_order')
    .set(taskOrder)
}
