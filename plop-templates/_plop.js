module.exports = {
  description: 'create a plop template',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'plop name?'
    },
    {
      type: 'list',
      name: 'type',
      message: 'What kind of template?',
      choices: ['file', 'folder']
    }
  ],
  actions: userInput => {
    const { type } = userInput || {}
    const typeResults = (type === 'file')
      ? [
          {
            type: 'add',
            path: 'plop-templates/_{{name}}.js',
            templateFile: 'plop-templates/plop-generator_file.hbs'
          },
          {
            type: 'add',
            path: 'plop-templates/{{name}}.js.hbs',
            data: { promptName: '{{name}}' },
            templateFile: 'plop-templates/plop-template.hbs'
          },
          {
            type: 'add',
            path: 'plop-templates/{{name}}.spec.js.hbs',
            templateFile: 'plop-templates/plop-template.spec.hbs'
          }
        ]
      : [ // type !== 'file
          {
            type: 'add',
            path: 'plop-templates/_{{name}}.js',
            templateFile: 'plop-templates/plop-generator_folder.hbs'
          }
        ]

    return [
      ...typeResults,
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
}
