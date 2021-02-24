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
    .then(() => dispatch({ type: 'TASK' }))
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
  console.log('taskActions.js:74 result: ', result)

  const taskSchedule = getNewTaskSchedule(result, getState)
  const taskKey = result.draggableId
  const dropId = result.destination.droppableId
  const newStart = dropId === 'unscheduled' ? '' : dropId
  const db = getFirebase()
    .database()

  // todo: build drop target "start-20210225...."
  // split on -
  //    to get filedTarget := start
  //    and targetValue := 20210225...
  db.ref(`task/${taskKey}/start`).set(newStart)
  // temp:
  taskSchedule.map(({ key, value }) => db.ref(`taskSchedule/${key}`).set(value))
}
// result: {
// combine: null
// destination: {droppableId: "20210225T150000-06:00", index: 0}
// draggableId: "-MU4-PVF_SkrLjOYTWsH"
// mode: "FLUID"
// reason: "DROP"
// source: {index: 8, droppableId: "unscheduled"}
// type: "DEFAULT"
