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
  actions: data => {
    const actions = [
      {
        type: 'addMany',
        destination: 'src/pages/{{name}}Form',
        base: 'plop-templates/page-templates/{{type}}-templates',
        templateFiles: 'plop-templates/page-templates/{{type}}-templates/*.hbs'
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/store/routePaths.js',
        // Pattern tells plop where in the file to inject the template
        pattern: "HOME: '/',",
        template: "ADD_CONTACT: '/contact/add',\nEDIT_CONTACT: '/contact/:contactId',"
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'modify',
        path: 'src/App.js',
        // Pattern tells plop where in the file to inject the template
        pattern: '</AppProvider>',
        templateFile: '_page-modify-App.js.hbs'
      }
    ]
    return actions
  }
}
