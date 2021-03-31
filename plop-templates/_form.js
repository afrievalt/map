const plopHistory = require('./plopHistory')

const [last] = plopHistory || []
const { destination, name, fields } = last || {}

module.exports = {
  description: 'create a form',
  prompts: [
    {
      type: 'input',
      name: 'name',
      default: name,
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
      default: fields,
      name: 'fields',
      message: 'form fields?'
    }
  ],
  actions: (prompts) => {
    const { fields } = prompts
    // todo: move
    const transformToIdType = raw => {
      const [id, type = 'string'] = raw.split(':')
      return { id, type, [type]: true }
    }
    const field = fields
      .replace(/ /g, '')
      .split(',')
      .map(transformToIdType) // 'firstName, lastName' => { id: 'firstName', type: 'string' },{ id: 'lastName', type: 'string' }
    const fieldLookup = {
      select: 'Select',
      date: 'DatePicker',
      bool: 'Checkbox'
    }
    const reduceUniqueFields = (acc, cur) => acc.add(fieldLookup[cur.type] || 'Input')
    const uniqueFields = [...field.reduce(reduceUniqueFields, new Set())]
    console.log('_form.js:39 field: ', uniqueFields)
    const data = { field, uniqueFields }
    const newHistory = {
      ...prompts,
      destination: 'src/pages/{{camelCase name}}',
      type: 'screen'
    }
    plopHistory.unshift(newHistory)

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
