module.exports = {
  description: 'create a redux slice with redux-toolkit',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'plop name?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'plop-templates/_{{name}}.js',
      templateFile: 'plop-templates/plop-generator.hbs'
    },
    {
      type: 'add',
      path: 'plop-templates/{{name}}.js.hbs',
      templateFile: 'plop-templates/plop-template.hbs'
    },
    {
      type: 'add',
      path: 'plop-templates/{{name}}.spec.js.hbs',
      templateFile: 'plop-templates/plop-template.spec.hbs'
    },
    {
      // Action type 'append' injects a template into an existing file
      type: 'append',
      path: 'plopfile.js',
      // Pattern tells plop where in the file to inject the template
      pattern: 'const _plop = require(\'./plop-templates/_plop\')',
      template: 'const _{{name}} = require(\'./plop-templates/_{{name}}\')'
    },
    {
      // Action type 'append' injects a template into an existing file
      type: 'append',
      path: 'plopfile.js',
      // Pattern tells plop where in the file to inject the template
      pattern: '// controller generator',
      template: "plop.setGenerator('{{name}}', _{{name}})"
    }
  ]
}
