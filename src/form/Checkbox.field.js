import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'react-final-form'
import FieldWrapper from './FieldWrapper'
import { getError } from './helpers'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const propTypes = {
  fieldId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.string
}

const CheckboxField = ({
  fieldId,
  label,
  variant = 'outlined',
  ...rest
}) => {
  const { input } = useField(fieldId, { type: 'checkbox' })
  return (

    <FieldWrapper>
      <FormControlLabel
        control={<Checkbox {...input} {...rest} />}
        label={label}
      />
    </FieldWrapper>
  )
}

CheckboxField.propTypes = propTypes

export default CheckboxField
