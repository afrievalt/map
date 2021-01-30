import React from 'react'
import { Form } from 'react-final-form'
import createDecorator from 'final-form-focus'
import { Grid } from '@material-ui/core'
import mutators from './mutators'

const focusOnErrorDecorator = createDecorator()
const decorators = [focusOnErrorDecorator]

const SimpleForm = ({
  onSubmit,
  initialValues,
  validate,
  children,
  ...rest
}) => {
  const defaultValues = initialValues || {}
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={defaultValues}
      validate={validate}
      decorators={decorators}
      mutators={mutators}
    >
      {({ handleSubmit }) => (
        <Grid container>
          <form onSubmit={handleSubmit} {...rest}>
            {children}
          </form>
        </Grid>
      )}
    </Form>
  )
}

export default SimpleForm
