import renderer from 'react-test-renderer'
import AppProvider from '../../AppProvider.js'
import ContactForm from './Contact.form.jsx';

xit('renders correctly', () => {
  const tree = renderer
    .create(
      <AppProvider>
        <ContactForm />
      </AppProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})