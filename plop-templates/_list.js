const plopHistory = require('./plopHistory')
const [last] = plopHistory || []
const { destination, name, fields } = last || {}

module.exports = {
  description: 'create a drag and drop list',
  prompts: [
    {
      type: 'input',
      name: 'name',
      default: name,
      message: 'list name?'
    },
    {
      type: 'input',
      name: 'path',
      default: destination,
      message: 'path to place list?'
    },
    {
      type: 'input',
      default: fields,
      name: 'fields',
      message: 'list fields?'
    }
  ],
  actions: prompts => {
    const { fields } = prompts
    const field = fields
      .replace(/ /g, '')
      .split(',')
      .map(id => ({ id })) // 'firstName, lastName' => { id: 'firstName' },{ id: 'lastName' }
    const data = { field }
    const newHistory = {
      ...prompts,
      destination
    }
    plopHistory.unshift(newHistory)

    const actions = [
      {
        type: 'addMany',
        destination: '{{path}}/list',
        base: 'plop-templates/list-templates/',
        templateFiles: 'plop-templates/list-templates/*.hbs',
        data
      },
      {
        type: 'modify',
        path: 'src/routes/FirebaseListener.jsx',
        pattern: 'useFirebaseConnect([',
        // todo: move location
        templateFile: 'plop-templates/page-templates/_fragments/grid/FirebaseListener.jsx.hbs'

      },
      {
        type: 'add',
        force: true,
        path: 'plop-templates/plopHistory.js',
        template: `module.exports = ${JSON.stringify(plopHistory)}`
      }
    ]
    return actions
  }
}
