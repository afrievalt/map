module.exports = {
  description: 'create a screen',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'screen name?'
    }
  ],
  actions: data => {
    const actions = [
      {
        type: 'addMany',
        destination: 'src/pages//{{camelCase name}}',
        base: 'plop-templates/screen-templates',
        templateFiles: 'plop-templates/screen-templates/*.hbs'
      },
      {
        type: 'modify',
        path: 'src/routes/routePaths.js',
        pattern: "HOME: '/',",
        templateFile: 'plop-templates/screen-templates/_fragments/routePaths.js.hbs'
      },
      {
        type: 'modify',
        path: 'src/routes/LeftDrawer.jsx',
        pattern: '</List>',
        templateFile: 'plop-templates/screen-templates/_fragments/LeftDrawer.jsx.hbs'
      },
      {
        type: 'modify',
        path: 'src/routes/MainContent.jsx',
        pattern: '</>',
        templateFile: 'plop-templates/screen-templates/_fragments/MainContent.jsx.hbs'

      },
      {
        type: 'append',
        path: 'src/routes/MainContent.jsx',
        pattern: "import Home from '../pages/Home'",
        template: "import {{pascalCase name}} from '../pages/{{camelCase name}}'"
      },
      {
        type: 'modify',
        path: 'src/routes/Title.jsx',
        pattern: "HOME: 'Home',",
        templateFile: 'plop-templates/screen-templates/_fragments/Title.jsx.hbs'

      },
      {
        type: 'modify',
        path: 'src/routes/FirebaseListener.jsx',
        pattern: 'useFirebaseConnect([',
        templateFile: 'plop-templates/screen-templates/_fragments/FirebaseListener.jsx.hbs'
      }
    ]
    return actions
  }
}
