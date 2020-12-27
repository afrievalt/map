module.exports = {
  description: 'create a redux slice with redux-toolkit',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'duck name?'
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/store/ducks/{{name}}.duck.js',
      templateFile: 'plop-templates/Duck.js.hbs'
    },
    {
      type: 'add',
      path: 'src/store/ducks/{{name}}.duck.spec.js',
      templateFile: 'plop-templates/Duck.spec.js.hbs'
    },
    {
      // Action type 'append' injects a template into an existing file
      type: 'append',
      path: 'src/store/rootReducer.js',
      // Pattern tells plop where in the file to inject the template
      pattern: 'import { connectRoutes } from \'redux-first-router\'',
      template: 'import {{name}} from \'./ducks/{{name}}.duck\';'
    },
    {
      // Action type 'append' injects a template into an existing file
      type: 'append',
      path: 'src/store/rootReducer.js',
      // Pattern tells plop where in the file to inject the template
      pattern: 'combineReducers({',
      template: '{{name}},'
    }
  ]
}