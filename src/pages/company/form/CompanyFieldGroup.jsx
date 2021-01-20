import React, { memo } from 'react'
import InputField from '../../../form/Input.field'
import SelectField from '../../../form/SelectField'

import Options from '../../../form/Options'
import { useSelector } from 'react-redux'
import { selectContactOptionsData } from './ContactList.selectors'

const CompanyForm = () => {
  const contactOptions = useSelector(selectContactOptionsData)
  return (
    <>
      <InputField fieldId='name' label='Name' />
      <InputField fieldId='techStack' label='Tech Stack' />
      <InputField fieldId='linkedInUrl' label='LinkedIn' />
      <InputField fieldId='companyWebsite' label='Company Website' />
      <InputField fieldId='companyJobSite' label='Company Job Site' />
      <InputField fieldId='formallyKnownAs' label='Formally known as' />
      <InputField fieldId='email' label='E-mail Address' />
      <SelectField fieldId='contact' label='Contact'>
        <Options data={contactOptions} />
      </SelectField>
    </>
  )
}

export default memo(CompanyForm)
