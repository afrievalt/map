import { Button, Container, CssBaseline } from '@material-ui/core'
import React, {memo} from 'react'
import SimpleForm from '../../../form/SimpleForm'
import companyValidate from './companyValidate'
import { upsertCompany } from './companyActions'
import { useActions } from '../../../hooks/useActions'
import CompanyFieldGroup from './CompanyFieldGroup'

const CompanyForm = () => {
  const handleSubmit = useActions(upsertCompany)
  return (
    <Container>
      <CssBaseline />
      <SimpleForm onSubmit={handleSubmit} validate={ companyValidate}>
        <CompanyFieldGroup />
        <Button type='submit' variant='contained' color='inherit'>
          Submit
        </Button>
      </SimpleForm>
    </Container>
  )
}

export default memo(CompanyForm)
