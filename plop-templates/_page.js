module.exports = {
  description: 'create a react page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'page name?'
    },
    {
      type: 'list',
      name: 'type',
      message: 'What kind of page?',
      choices: ['List', 'Form', 'Empty'],
      filter: function (val) {
        return val.toLowerCase()
      }
    }
  ],
  actions: [
    {
      type: 'addMany',
      destination: 'src/pages/{{name}}',
      base: 'plop-templates/page-templates/{{type}}-templates',
      templateFiles: 'plop-templates/page-templates/{{type}}-templates/*.hbs'
    }
  ]
}
