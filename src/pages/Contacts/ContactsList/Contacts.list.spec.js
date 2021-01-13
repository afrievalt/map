import renderer from 'react-test-renderer'
import AppProvider from '../../AppProvider.js'
import ContactsList from './Contacts.list.jsx'

xit('renders correctly', () => {
  const tree = renderer
    .create(
      <AppProvider>
        <ContactsList />
      </AppProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
