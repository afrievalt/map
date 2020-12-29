module.exports = {
  description: 'create a react page',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'What kind of page?',
      choices: ['List', 'Form', 'Empty'],
      filter: function (val) {
        return val.toLowerCase()
      }
    },
    {
      type: 'input',
      name: 'name',
      message: '{{type}} name?'
    }
  ],
  actions: [
    {
      type: 'addMany',
      destination: 'src/pages/{{name}}Form',
      base: 'plop-templates/page-templates/{{type}}-templates',
      templateFiles: 'plop-templates/page-templates/{{type}}-templates/*.hbs'
    }
  ]
}
