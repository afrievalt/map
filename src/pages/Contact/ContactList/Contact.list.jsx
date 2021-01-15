import { Button, Container, CssBaseline } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectContactTableData } from './ContactList.selectors'
{ /* <InputField fieldId='firstName' label='First Name' />
      <InputField fieldId='lastName' label='Last Name' />
      <InputField fieldId='phoneNumber' label='Phone Number' /> */ }

const columns = [
  
  { field: 'firstName', headerName: 'Last Name' },
  { field: 'lastName', headerName: 'Student First Name' },
  { field: 'phoneNumber', headerName: 'Student Last Name' }
]
const ContactList = () => {
  const studentData = useSelector(selectContactTableData) 
  return (
    <Container style={{ height: 600, width: '100%' }}>
      <h1>Hello contacts</h1>
      <DataGrid rows={studentData} columns={columns} />
    </Container>
  )
}

export default memo(ContactList)
