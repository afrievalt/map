module.exports = {
  description: 'create a react page',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'What kind of page?',
      choices: ['List', 'Form', 'Grid', 'Empty'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Page name?'
    }
  ],
  actions: data => {
    const actions = [
      {
        type: 'addMany',
        destination: 'src/pages//{{lowercase name}}//{{name}}Form',
        base: 'plop-templates/page-templates/{{type}}-templates',
        templateFiles: 'plop-templates/page-templates/{{type}}-templates/*.hbs'
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/store/routePaths.js',
        // Pattern tells plop where in the file to inject the template
        pattern: "HOME: '/',",
        template: "{{constantCase name}}_ADD: '/{{lowerCase name}}/add',\n{{constantCase name}}_EDIT: '/{{lowerCase name}}/:{{lowerCase name}}Id',"
      },
      {
        type: 'modify',
        path: 'src/App.js',
        // Pattern tells plop where in the file to inject the template
        pattern: '</AppProvider>',
        templateFile: 'plop-templates/_page-modify-App.js.hbs'
      },
      {
        type: 'append',
        path: 'src/App.js',
        // Pattern tells plop where in the file to inject the template
        pattern: "import Route from './controls/Route'",
        template: "import {{name}}Form from './pages/{{name}}Form'"
      }
    ]
    return actions
  }
}
