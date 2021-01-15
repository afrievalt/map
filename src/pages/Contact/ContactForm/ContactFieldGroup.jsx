import { Button, Container, CssBaseline } from '@material-ui/core'
import React, { memo } from 'react'
import InputField from '../../../form/Input.field'

const ContactForm = () => {
  return (
    <>
      <InputField fieldId='firstName' label='First Name' />
      <InputField fieldId='lastName' label='Last Name' />
      <InputField fieldId='phoneNumber' label='Phone Number' />
      <InputField fieldId='linkedInProfile' label='LinkedIn Profile' />
      <InputField fieldId='colleagueAt' label='Colleague At' />
      <InputField fieldId='employer' label='Employer' />
      <InputField fieldId='skills' label='Skills' />
      <InputField fieldId='lastContact' label='Last Contact' />
      <InputField fieldId='contactNotes' label='Contact Notes' />
      <InputField fieldId='pastEmployers' label='pastEmployers' />
    </>
  )
}

export default memo(ContactForm)
