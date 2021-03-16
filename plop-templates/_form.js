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

    const actions = [
      {
        type: 'addMany',
        destination: '{{path}}/form',
        base: 'plop-templates/form-templates/',
        templateFiles: 'plop-templates/form-templates/*.hbs',
        data
      }
    ]
    return actions
  }
}
