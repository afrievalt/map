module.exports = {
  description: 'create a control',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'control name?'
    },
    {
      type: 'input',
      name: 'path',
      message: 'control path?',
      default: 'src/controls'
    }
  ],
  actions: [
    {
      type: 'add',
      path: '{{path}}/{{pascalCase name}}.jsx',
      templateFile: 'plop-templates/control.hbs'
    }
  ]
}