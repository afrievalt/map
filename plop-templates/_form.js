const plopHistory = require('./plopHistory')

const [last] = plopHistory || []
const { destination } = last || {}

module.exports = {
  description: 'create a form',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'form name?'
    },
    {
      type: 'input',
      name: 'path',
      default: destination,
      message: 'path to place form?'
    },
    {
      type: 'input',
      name: 'fields',
      message: 'form fields?'
    }
  ],
  actions: (prompts) => {
    const { fields } = prompts
    const field = fields
      .replace(/ /g, '')
      .split(',')
      .map(id => ({ id })) // 'firstName, lastName' => { id: 'firstName' },{ id: 'lastName' }
    const data = { field }
    const newHistory = {
      ...prompts,
      destination: 'src/pages/{{camelCase name}}',
      type: 'screen'
    }
    plopHistory.push(newHistory)

    const actions = [
      {
        type: 'addMany',
        destination: '{{path}}/form',
        base: 'plop-templates/form-templates/',
        templateFiles: 'plop-templates/form-templates/*.hbs',
        data
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
