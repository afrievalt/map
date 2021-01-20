import React from 'react'
import { useField } from 'react-final-form'
import FieldWrapper from './FieldWrapper'
import { getError } from './helpers'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'

const SelectField = ({ fieldId, label, children, ...rest }) => {
  const { input, meta } = useField(fieldId)
  const { showError, errorMessage } = getError(meta)
  const htmlFor = input.id
  return (
    <FieldWrapper>
      <FormControl error={showError} variant='outlined'>
        <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
        <Select
          native
          inputProps={{ ...input }}
          label={label}
          {...input}
          {...rest}
        >
          <option aria-label='None' value='' />
          {children}
        </Select>
        <FormHelperText>{errorMessage}</FormHelperText>
      </FormControl>
    </FieldWrapper>
  )
}

export default SelectField
