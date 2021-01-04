import renderer from 'react-test-renderer'
import AppProvider from '../../AppProvider.js'
import StudentTable from './StudentTable.jsx';

xit('renders correctly', () => {
  const tree = renderer
    .create(
      <AppProvider>
        <StudentTable />
      </AppProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})