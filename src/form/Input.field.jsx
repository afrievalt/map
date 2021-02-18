import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'react-final-form'
import FieldWrapper from './FieldWrapper'
import { getError } from './helpers'
import { TextField } from '@material-ui/core'

const propTypes = {
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string
}

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

InputField.propTypes = propTypes

export default InputField
