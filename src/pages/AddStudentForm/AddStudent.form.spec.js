import React from 'react';
import renderer from 'react-test-renderer';
import AddStudentForm from './AddStudent.form.jsx';

xit('renders correctly', () => {
  const tree = renderer
    .create(<AddStudentForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});