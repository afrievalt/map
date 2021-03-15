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
    }
  ],
  actions: (prompts) => {
    const data = {
      field: [
        { id: 'firstName' },
        { id: 'lastName' }
      ]
    }
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
