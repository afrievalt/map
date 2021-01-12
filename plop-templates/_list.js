module.exports = {
  description: 'create a list page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'List name?'
    }
  ],
  actions: data => {
    const actions = [
      {
        type: 'addMany',
        destination: 'src/pages/{{name}}/{{name}}List',
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
        template: "import {{name}}List from './pages/{{name}}List'"
      }
    ]
    return actions
  }
}
