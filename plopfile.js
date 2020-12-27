const _duck = require('./plop-templates/_duck')

module.exports = function (plop) {
  // controller generator
  plop.setGenerator('field', {
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
        path: 'src/app/fields/{{name}}.js',
        templateFile: 'plop-templates/InputField.js.hbs'
      }
    ]
  })
  plop.setGenerator('duck', _duck)
}
