import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import { useField, useForm } from 'react-final-form'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  }
}))

const CheckboxGroupField = ({ fieldId, options, label, helperText }) => {
  const { input } = useField(fieldId)
  const { mutators } = useForm()
  const classes = useStyles()

  const handleChange = (event) => {
    const lookup = input?.value || {}
    const newLookup = {
      ...lookup,
      [event.target.name]: event.target.checked
    }
    mutators.setValueMutator(fieldId, newLookup)
  }

  return (
    <div className={classes.root}>
      <FormControl component='fieldset' className={classes.formControl}>
        <FormLabel component='legend'>{label}</FormLabel>
        <FormGroup>
          {
            options.map(o => (
              <FormControlLabel
                label={o.label}
                key={o.value}
                control={
                  <Checkbox
                    checked={input.value[o.value]}
                    onChange={handleChange}
                    name={o.value}
                    color='primary'
                  />
                }

              />))
          }

        </FormGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </div>
  )
}

export default CheckboxGroupField
