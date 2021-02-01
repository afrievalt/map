import renderer from 'react-test-renderer'
import AppProvider from '.../../../AppProvider.js'
import TaskForm from './Task.form.jsx';

xit('renders correctly', () => {
  const tree = renderer
    .create(
      <AppProvider>
        <TaskForm />
      </AppProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})