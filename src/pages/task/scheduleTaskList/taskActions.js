export const upsertTask = (payload, form) => (dispatch, getState, getFirebase) => {
  const db = getFirebase()
    .database()
  const newRef = db.ref('task')
    .push()
  console.log('taskActions.js:6 payload: ', payload)
  db.ref('taskSchedule/unscheduled')
    .push(newRef.key)
  console.log('taskActions.js:9 newRef.key: ', newRef.key)
  newRef.set(payload)
    // .then(() => dispatch({ type: 'PLAN' }))
    .then(form.restart)
    .catch(function (error) {
      const errorMessage = error.message
      window.alert(errorMessage)
      console.log(error)
    })
}

export const updateTask = (payload, form) => (dispatch, getState, getFirebase) => {
  const id = getState().location.payload.taskId
  getFirebase()
    .database()
    .ref(`task/${id}`)
    .set(payload)
    .then(() => dispatch({ type: 'PLAN' }))
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

const defaultTaskSchedule = {
  unscheduled: []
}
const getNewTaskSchedule = (result, getState) => {
  const { destination, source, draggableId } = result
  const { droppableId: targetId, index } = destination || {}
  const sourceId = source.droppableId
  const isInSameList = sourceId === targetId
  const isNewLocation = !(source.index === index && isInSameList)

  if (!isNewLocation) {
    return []
  }
  const taskSchedule = getState().firebase.data.taskSchedule || defaultTaskSchedule
  const sourceList = Object.values(taskSchedule[sourceId] || {})
  const targetList = isInSameList ? sourceList : Object.values(taskSchedule[targetId] || {})
  sourceList.splice(source.index, 1)
  targetList.splice(index, 0, draggableId)
  if (isInSameList) {
    return [{ key: sourceId, value: sourceList }]
  }
  return [
    { key: sourceId, value: sourceList },
    { key: targetId, value: targetList }
  ]
}

export const dragEnd = (result) => (dispatch, getState, getFirebase) => {
  const taskSchedule = getNewTaskSchedule(result, getState)
  const db = getFirebase()
    .database()
  taskSchedule.map(({ key, value }) => db.ref(`taskSchedule/${key}`).set(value))
}
