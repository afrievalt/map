import renderer from 'react-test-renderer'
import AppProvider from '.../../../AppProvider.js'
import CompanyForm from './Company.form.jsx';

xit('renders correctly', () => {
  const tree = renderer
    .create(
      <AppProvider>
        <CompanyForm />
      </AppProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})