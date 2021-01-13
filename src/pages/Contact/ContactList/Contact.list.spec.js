import renderer from 'react-test-renderer'
import AppProvider from '../../AppProvider.js'
import ContactList from './Contact.list.jsx';

xit('renders correctly', () => {
  const tree = renderer
    .create(
      <AppProvider>
        <ContactList />
      </AppProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})