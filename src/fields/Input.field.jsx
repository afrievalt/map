import {Grid, TextField} from '@material-ui/core';
import React from 'react';
import {useField} from 'react-final-form';
import FieldWrapper from './FieldWrapper';

const InputField = ({
  fieldId,
  label,
  variant = 'outlined',
  ...rest
}) => {
  const {input} = useField(fieldId);

  return (
    <FieldWrapper>
      <TextField label={label} variant={variant} {...input} {...rest}/>
    </FieldWrapper>
  )
}

export default InputField;