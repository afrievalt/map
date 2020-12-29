import React from 'react';
import renderer from 'react-test-renderer';
import SignInForm from './SignIn.form.jsx';

xit('renders correctly', () => {
  const tree = renderer
    .create(<SignInForm />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});