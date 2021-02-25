import sampleData from '../../../store/sampleData'
import { selectTimeSlotLookup } from './taskList.selectors'

describe('selectTimeSlotLookup - ', () => {
  it('sampleData > lookup  ', () => {
    // arrange
    // act
    const result = selectTimeSlotLookup(sampleData)

    console.log('taskLists.selectors.spec.js:9 result: ', result)

    // assert
    expect(result).toEqual({
      '2021-02-25T09:19': [
        {
          start: '2021-02-25T09:19',
          status: 'todo',
          title: 'build filters for slots',
          indeterminate: false,
          checked: false,
          color: 'none',
          id: '-MUJOrRZ2tbXkTcoW4MQ'
        },
        {
          start: '2021-02-25T09:19',
          status: 'todo',
          title: 'build filters for slots',
          indeterminate: false,
          checked: false,
          color: 'none',
          id: '-MUJOrRZ2tbXkTcoW4MQ'
        }
      ],
      '2021-02-25T09:00': [
        {
          start: '2021-02-25T09:00',
          status: 'todo',
          title: 'add new plop for utility',
          indeterminate: false,
          checked: false,
          color: 'none',
          id: '-MUJ4LrvvgRv2I-_wXSm'
        },
        {
          start: '2021-02-25T09:00',
          status: 'todo',
          title: 'remove auto fil from add task field',
          indeterminate: false,
          checked: false,
          color: 'none',
          id: '-MUJ4QK79lFBJaT1oRlS'
        }
      ]
    })
  })
})
