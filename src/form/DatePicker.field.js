import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'react-final-form'
import FieldWrapper from './FieldWrapper'
import { getError } from './helpers'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import OutlinedInput from '@material-ui/core/OutlinedInput'

const propTypes = {
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string
}

const DatePickerField = ({
  fieldId,
  label,
  variant = 'outlined',
  ...rest
}) => {
  const { input, meta } = useField(fieldId)
  const { showError, errorMessage } = getError(meta)
  const htmlFor = input.id
  return (
    <FieldWrapper>
      <InputLabel htmlFor={htmlFor}>{label}</InputLabel>
      <OutlinedInput
        label={label}
        error={showError}
        helperText={errorMessage}
        variant={variant}
        placeholder='foo bar'
        type='datetime-local'
        {...input}
        {...rest}
      />

      <FormHelperText>{errorMessage}</FormHelperText>
    </FieldWrapper>
  )
}

DatePickerField.propTypes = propTypes

export default DatePickerField
