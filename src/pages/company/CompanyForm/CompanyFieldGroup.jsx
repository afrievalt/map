import { Button, Container, CssBaseline } from '@material-ui/core'
import React, {memo} from 'react'
import InputField from '../../../form/Input.field'

const CompanyForm = () => {
  return (
    <>
      <InputField fieldId='email' label='E-mail Address' />
    </>
  )
}

export default memo(CompanyForm)
