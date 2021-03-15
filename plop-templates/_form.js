module.exports = {
  description: 'create a form',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'form name?'
    }
  ],
  actions: data => {
    const actions = [
      {
        type: 'addMany',
        destination: './form',
        base: 'plop-templates/{{camelCase name}}-templates/',
        templateFiles: 'plop-templates/{{camelCase name}}-templates/*.hbs'
      }
    ]
    return actions
  }
}
