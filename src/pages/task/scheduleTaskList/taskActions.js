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

const getNewTaskOrderOld = (result, getState) => {
  const { destination, source, draggableId } = result
  const { droppableId, index } = destination || {}
  const isInSameList = source.droppableId === droppableId
  const isNewLocation = !(source.index === index && isInSameList)
  if (isNewLocation) {
    const newTaskOrder = getState().firebase.ordered.backlog?.map(v => v.value) || []
    newTaskOrder.splice(source.index, 1)
    newTaskOrder.splice(index, 0, draggableId)
    return newTaskOrder
  }
}

const getNewTaskOrder = (result, getState) => {
  const { destination, source, draggableId } = result
  const { droppableId, index } = destination || {}
  const isInSameList = source.droppableId === droppableId
  const isNewLocation = !(source.index === index && isInSameList)

  if (!isNewLocation) {
    return
  }
  const backlog = getState().firebase.ordered.backlog?.map(v => v.value) || []
  const timeSlot = getState().firebase.ordered.timeSlot?.map(v => v.value) || []
  const newOrder = {
    backlog, timeSlot
  }
  console.log('taskActions.js:63 timeSlot: ', newOrder, source.droppableId, droppableId)
  newOrder[source.droppableId].splice(source.index, 1)
  newOrder[droppableId].splice(index, 0, draggableId)
  // newTaskOrder.splice(source.index, 1)
  // newTaskOrder.splice(index, 0, draggableId)
  return newOrder
}
export const dragEnd = (result) => (dispatch, getState, getFirebase) => {
  const newOrder = getNewTaskOrder(result, getState)
  if (newOrder) {
    getFirebase()
      .database()
      .ref('backlog')
      .set(newOrder.backlog)
    getFirebase()
      .database()
      .ref('timeSlot')
      .set(newOrder.timeSlot)
  }
}

export const dragEndOld = (result) => (dispatch, getState, getFirebase) => {
  const taskOrder = getNewTaskOrderOld(result, getState)
  taskOrder && getFirebase()
    .database()
    .ref('backlog')
    .set(taskOrder)
}
