import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import InputField from '../../../form/Input.field'
import Options from '../../../form/Options'
import SelectField from '../../../form/SelectField'
import { selectCompanyOptionsData } from './contactForm.selectors'

const ContactForm = () => {
  const companyOptionsData = useSelector(selectCompanyOptionsData);
  return (
    <>
      <InputField fieldId='firstName' label='First Name' />
      <InputField fieldId='lastName' label='Last Name' />
      <InputField fieldId='phoneNumber' label='Phone Number' />
      <InputField fieldId='linkedInProfile' label='LinkedIn Profile' />
      <InputField fieldId='colleagueAt' label='Colleague At' />
      <SelectField fieldId='employer' label='Employer'>
        <Options data={companyOptionsData} />
      </SelectField>
      <InputField fieldId='skills' label='Skills' />
      <InputField fieldId='lastContact' label='Last Contact' />
      <InputField fieldId='contactNotes' label='Contact Notes' />
      <InputField fieldId='pastEmployers' label='pastEmployers' />
    </>
  )
}

export default memo(ContactForm)
