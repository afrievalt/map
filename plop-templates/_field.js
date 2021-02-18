module.exports = {
  description: 'create a field control to be used in react final forms',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'field name?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/form/{{name}}.field.js',
      templateFile: 'plop-templates/InputField.js.hbs'
    }
  ]
}