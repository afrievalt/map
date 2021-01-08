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
        path: 'src/store/rootReducer.js',
        // Pattern tells plop where in the file to inject the template
        pattern: "HOME: '/',",
        template: "ADD_CONTACT: '/contact/add',\nEDIT_CONTACT: '/contact/:contactId',"
      }
    ]
    return actions
  }
}
