import React, { memo } from 'react'
import SelectField from '../../../form/SelectField'
import InputField from '../../../form/Input.field'
import Options from '../../../form/Options'

const statusOptions = [
  { label: 'to do', value: 'todo', key: 'todo' },
  { label: 'in progress', value: 'inprogress', key: 'inprogress' },
  { label: 'done', value: 'done', key: 'done' }
]

const TaskForm = () => {
  return (
    <>
      <SelectField fieldId='status' label='Status'>
        <Options data={statusOptions} />
      </SelectField>
      <InputField fieldId='title' label='Title' />
      <InputField fieldId='description' label='Description' />
    </>
  )
}

export default memo(TaskForm)
