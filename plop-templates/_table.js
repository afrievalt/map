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
      message: 'path to place table?'
    },
    {
      type: 'input',
      default: fields,
      name: 'fields',
      message: 'table fields?'
    }
  ],
  actions: prompts => {
    const { fields } = prompts
    const transformToIdType = raw => {
      const [id, type = 'string'] = raw.split(':')
      return { id, type, [type]: true }
    }
    const field = fields
      .replace(/ /g, '')
      .split(',')
      .map(transformToIdType) // 'firstName, lastName' => { id: 'firstName' },{ id: 'lastName' }
    const data = { field }
    const newHistory = {
      ...prompts,
      destination
    }
    plopHistory.unshift(newHistory)

    const actions = [
      {
        type: 'addMany',
        destination: '{{path}}/table',
        base: 'plop-templates/table-templates/',
        templateFiles: 'plop-templates/table-templates/*.hbs',
        data
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
