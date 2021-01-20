import { TextField } from '@material-ui/core'
import React from 'react'
import { useField } from 'react-final-form'
import FieldWrapper from './FieldWrapper'
import { getError } from './helpers'

const InputField = ({
  fieldId,
  label,
  variant = 'outlined',
  ...rest
}) => {
  const { input, meta } = useField(fieldId)
  const { showError, errorMessage } = getError(meta)
  return (
    <FieldWrapper>
      <TextField
        label={label}
        error={showError}
        helperText={errorMessage}
        variant={variant}
        {...input}
        {...rest}
      />
    </FieldWrapper>
  )
}

export default InputField
