import { Container } from '@material-ui/core'
import React from 'react'
import WelcomeSection from '../../controls/WelcomeSection/WelcomeSection'
import AddStudentForm from '../AddStudentForm/AddStudent.form'
import StudentTable from '../StudentTable'
const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <WelcomeSection />
      <AddStudentForm />
      <StudentTable />
    </Container>
  )
}

export default Home
