import renderer from 'react-test-renderer'
import AppProvider from '../../AppProvider.js'
import TaskList from './Task.list.jsx';

xit('renders correctly', () => {
  const tree = renderer
    .create(
      <AppProvider>
        <TaskList />
      </AppProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})