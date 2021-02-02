import { Button, Container, CssBaseline } from '@material-ui/core'
import React, { memo } from 'react'
import SelectField from '../../../form/SelectField'
import InputField from '../../../form/Input.field'
import Options from '../../../form/Options'

const TaskForm = () => {
  return (
    <>
      <SelectField fieldId='status' label='Contact'>
        <Options data={contactOptions} />
      </SelectField>
      <InputField fieldId='title' label='Title' />
      <InputField fieldId='description' label='Description' />

    </>
  )
}

export default memo(TaskForm)
