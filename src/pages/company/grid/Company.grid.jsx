import React, { memo } from 'react'
import { Container } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { selectCompanyGridData } from './companyGrid.selectors.js'
import { useSelector } from 'react-redux'

const columns = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'techStack', headerName: 'Name', width: 150 },
  { field: 'linkedInUrl', headerName: 'Name', width: 150 },
  { field: 'companyWebsite', headerName: 'Website', width: 150 },
  { field: 'contact', headerName: 'Contact', width: 150 },
]

const CompanyGrid = () => {
  const companyGridData = useSelector(selectCompanyGridData)
  return (
    <Container>
      <Container style={{ height: 600, width: '100%' }}>
        <DataGrid rows={companyGridData} columns={columns} />
      </Container>
    </Container>
  )
}

export default memo(CompanyGrid)
