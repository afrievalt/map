import sampleData from '../../../store/sampleData'
import { selectScheduledTasksKeys, selectScheduledTasks } from './taskList.selectors'

describe('selectScheduledTasksKeys - ', () => {
  it('sampleData > keys  ', () => {
    // arrange
    // act
    const result = selectScheduledTasksKeys(sampleData)

    // assert
    expect(result).toEqual([
      '-MTq3E6y2Az32aLrI5i0',
      '-MU3wa-x2fveVvXb8ga2',
      '-MU8sATvgRXjzeTCMymT',
      '-MUJ4LrvvgRv2I-_wXSm',
      '-MUJ4QK79lFBJaT1oRlS',
      '-MUJNOf-RfemQMjY_RKw',
      '-MUJOrRZ2tbXkTcoW4MQ'
    ])
  })
})

describe('selectScheduledTasks - ', () => {
  it('sampleData > lookup  ', () => {
    // arrange
    // act
    const result = selectScheduledTasks(sampleData)
    const testResult = result.map(({ start, title }) => ({ start, title }))
    console.log('taskList.selectors.spec.js:10 result: ', testResult)

    // assert
    expect(testResult).toEqual(
      [
        { start: '2021-02-20T12:00', title: 'too cool' },
        { start: '20210225T150000-06:00', title: 'foo' },
        { start: '2021-02-19T10:52', title: 'Nice' },
        { start: '2021-02-25T09:00', title: 'add new plop for utility' },
        {
          start: '2021-02-25T09:00',
          title: 'remove auto fil from add task field'
        },
        { start: '2021-02-18T08:11', title: "don't show in planning" },
        { start: '2021-02-25T09:19', title: 'build filters for slots' }
      ]
    )
  })
})
