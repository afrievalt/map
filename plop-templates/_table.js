const plopHistory = require('./plopHistory')
const [last] = plopHistory || []
const { destination, name, fields } = last || {}

module.exports = {
  description: 'create a table',
  prompts: [
    {
      type: 'input',
      name: 'name',
      default: name,
      message: 'table name?'
    },
    {
      type: 'input',
      name: 'path',
      default: destination,
      message: 'path to place form?'
    },
    {
      type: 'input',
      default: fields,
      name: 'fields',
      message: 'form fields?'
    }
  ],
  actions: prompts => {
    const newHistory = {
      ...prompts,
      destination
    }
    plopHistory.push(newHistory)

    const actions = [
      {
        type: 'addMany',
        destination: '{{path}}/table',
        base: 'plop-templates/table-templates/',
        templateFiles: 'plop-templates/table-templates/*.hbs'
      },
      {
        type: 'modify',
        path: 'src/routes/FirebaseListener.jsx',
        pattern: 'useFirebaseConnect([',
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
