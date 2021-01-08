import { Container } from '@material-ui/core'
import React, { memo } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { useSelector } from 'react-redux'
import { selectStudentTableData } from './StudentTable.selectors'

const columns = [
  { field: 'id', headerName: 'ID' },
  { field: 'lastName', headerName: 'Last Name' },
  { field: 'studentFirstName', headerName: 'Student First Name' },
  { field: 'studentLastName', headerName: 'Student Last Name' }
]
const handleRowClick = (x) => console.log('StudentTable.jsx:13 x: ', x.row.id) 
const StudentTable = () => {
  const studentData = useSelector(selectStudentTableData)
  return (
    <Container style={{ height: 600, width: '100%' }}>
      <DataGrid rows={studentData} columns={columns} onRowClick={handleRowClick} />
    </Container>
  )
}

export default memo(StudentTable)
