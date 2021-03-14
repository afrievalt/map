import React from 'react'
import SignUpForm from '../pages/SignUpForm'
import SignInForm from '../pages/SignInForm'
import Route from '../controls/Route'
import CompanyGrid from '../pages/company/grid'
import CompanyForm from '../pages/company/form'
import ContactForm from '../pages/Contact/ContactForm'
import ContactList from '../pages/Contact/ContactList'
import Home from '../pages/Home'
import TaskForm from '../pages/task/form'
import AllTasksList from '../pages/task/scheduleTaskList'
import UnscheduledTaskList from '../pages/task/scheduleTaskList/UnscheduledTaskList'

const MainContent = ({ type, children }) => (
  <>
    <Route type='HOME'>
      <Home />
    </Route>
    <Route type='SIGNUP'>
      <SignUpForm />
    </Route>
    <Route type='SIGNIN'>
      <SignInForm />
    </Route>
    <Route type='CONTACT'>
      <ContactList />
    </Route>
    <Route type='CONTACT_ADD'>
      <ContactForm />
    </Route>
    <Route type='COMPANY_ADD'>
      <CompanyForm />
    </Route>
    <Route type='COMPANY'>
      <CompanyGrid />
    </Route>
    <Route type='TASK_ADD'>
      <TaskForm />
    </Route>
    <Route type={['TASK', 'TASK_EDIT']}>
      <AllTasksList />
    </Route>
    <Route type={['PLAN']}>
      <UnscheduledTaskList />
    </Route>
  </>

)

export default React.memo(MainContent)
