import { Button, Container } from '@material-ui/core'
import React, { memo } from 'react'
import SimpleForm from '../../../form/SimpleForm'
import ContactValidate from './ContactValidate'
import { upsertContact } from './contactActions'
import { useActions } from '../../../hooks/useActions'
import ContactFieldGroup from './ContactFieldGroup'
import CheckboxGroupField from '../../../form/CheckboxGroupField'

const ContactForm = () => {
  const handleSubmit = useActions(upsertContact)
  return (
    <Container>
      <Container>
        <SimpleForm onSubmit={handleSubmit} validate={ContactValidate}>
          <CheckboxGroupField
            fieldId='tags'
            label='Tags'
            options={[
              { label: 'Decision Maker', value: 'Decision Maker' },
              { label: 'Colleague', value: 'Colleague' },
              { label: 'HR', value: 'HR' },
              { label: 'Recruiter', value: 'Recruiters' },
              { label: 'Influencer', value: 'Influencer' }
            ]}
          />
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
