export const upsertTask = (payload, form) => (dispatch, getState, getFirebase) => {
  const db = getFirebase()
    .database()
  const newRef = db.ref('task')
    .push()
  db.ref('taskSchedule/unscheduled')
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
  console.log('taskActions.js:50 taskSchdule: ', taskSchedule)
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
  console.log('taskActions.js:65 newSche: ', taskSchedule)
  const db = getFirebase()
    .database()
  taskSchedule.map(({ key, value }) => db.ref(`taskSchedule/${key}`).set(value))
}
