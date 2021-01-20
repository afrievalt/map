import renderer from 'react-test-renderer'
import AppProvider from '../../AppProvider.js'
import CompanyGrid from './Company.grid.jsx';

xit('renders correctly', () => {
  const tree = renderer
    .create(
      <AppProvider>
        <CompanyGrid />
      </AppProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})