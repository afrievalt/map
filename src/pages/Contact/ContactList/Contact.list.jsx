import { Container } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectContactTableData } from './ContactList.selectors'

const columns = [

  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  { field: 'phoneNumber', headerName: 'Phone', width: 150 },
  { field: 'linkedInProfile', headerName: 'Linked In', width: 150 },
  { field: 'colleagueAt', headerName: 'Colleague At', width: 150 },
  { field: 'employer', headerName: 'Employer', width: 150 },
  { field: 'skills', headerName: 'Skills', width: 150 },
  { field: 'lastContact', headerName: 'Last Contact', width: 150 },
  { field: 'pastEmployers', headerName: 'Past Employers', width: 150 }

]
const ContactList = () => {
  const studentData = useSelector(selectContactTableData)
  return (
    <Container style={{ height: 600, width: '100%' }}>
      <DataGrid rows={studentData} columns={columns} />
    </Container>
  )
}

export default memo(ContactList)
