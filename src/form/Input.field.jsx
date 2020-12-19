import {TextField} from '@material-ui/core';
import React from 'react';
import {useField} from 'react-final-form';
import FieldWrapper from './FieldWrapper';

const getError = meta => {
  const {
    error = "",
    touched
  } = meta
  console.log('Input.field.jsx:14 meta: ', meta);
  const inProgressError = error && error[0] === "-";
  const displayError = inProgressError
    ? error.substring(1)
    : error;
  const suppressError = inProgressError && !touched
  const errorMessage = suppressError
    ? ""
    : displayError
  return {
    showError: !!errorMessage,
    errorMessage
  }
}

const InputField = ({
  fieldId,
  label,
  variant = 'outlined',
  ...rest
}) => {
  const {input, meta} = useField(fieldId);
  const {showError, errorMessage} = getError(meta)
  return (
    <FieldWrapper>
      <TextField
        label={label}
        error={showError}
        helperText={errorMessage}
        variant={variant}
        {...input}
        {...rest}/>
    </FieldWrapper>
  )
}

export default InputField;