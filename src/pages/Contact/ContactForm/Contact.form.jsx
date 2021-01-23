import { Button, Container } from '@material-ui/core'
import React, { memo } from 'react'
import SimpleForm from '../../../form/SimpleForm'
import ContactValidate from './ContactValidate'
import { upsertContact } from './contactActions'
import { useActions } from '../../../hooks/useActions'
import ContactFieldGroup from './ContactFieldGroup'

const ContactForm = () => {
  const handleSubmit = useActions(upsertContact)
  return (
    <Container>
      <Container>
        <SimpleForm onSubmit={handleSubmit} validate={ContactValidate}>
          <ContactFieldGroup />
          <Button type='submit' variant='contained' color='inherit'>
            Submit
          </Button>
        </SimpleForm>
      </Container>
    </Container>
  )
}

export default memo(ContactForm)
