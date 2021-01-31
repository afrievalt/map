module.exports = {
  description: 'create a react page',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'What kind of page?',
      choices: ['Form', 'Grid', 'View', 'List', 'Empty']
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
        destination: 'src/pages//{{lowerCase name}}//{{lowerCase type}}',
        base: 'plop-templates/page-templates/{{type}}-templates',
        templateFiles: 'plop-templates/page-templates/{{type}}-templates/*.hbs'
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'modify',
        path: 'src/routes/routePaths.js',
        // Pattern tells plop where in the file to inject the template
        pattern: "HOME: '/',",
        // templateFile: './plop-templates/page-templates/_fragments/form/routePaths.js.hbs'
        // templateFile: 'plop-templates/page-templates/_fragments//{{lowerCase type}}/routePaths.js.hbs'plo
        templateFile: 'plop-templates/page-templates/_fragments//{{lowerCase type}}/routePaths.js.hbs'
      },
      {
        type: 'modify',
        path: 'src/routes/LeftDrawer.jsx',
        // Pattern tells plop where in the file to inject the template
        pattern: '</List>',
        // templateFile: 'plop-templates/fragment-templates/page//{{type}}-LeftDrawer.jsx.hbs'
        templateFile: 'plop-templates/page-templates/_fragments//{{lowerCase type}}/LeftDrawer.jsx.hbs'
      },
      {
        type: 'modify',
        path: 'src/routes/MainContent.jsx',
        // Pattern tells plop where in the file to inject the template
        pattern: '</>',
        // templateFile: 'plop-templates/fragment-templates/page//{{type}}-MainContent.jsx.hbs'
        templateFile: 'plop-templates/page-templates/_fragments//{{lowerCase type}}/MainContent.jsx.hbs'

      },
      {
        type: 'append',
        path: 'src/routes/MainContent.jsx',
        // Pattern tells plop where in the file to inject the template
        pattern: "import Home from '../pages/Home'",
        template: "import {{name}}{{type}} from './pages//{{lowerCase name}}/{{lowerCase type}}'"
      },
      {
        type: 'modify',
        path: 'src/routes/Title.jsx',
        // Pattern tells plop where in the file to inject the template
        pattern: "HOME: 'Home',",
        // templateFile: 'plop-templates/fragment-templates/page//{{type}}-MainContent.jsx.hbs'
        templateFile: 'plop-templates/page-templates/_fragments//{{lowerCase type}}/Title.jsx.hbs'

      },
      {
        type: 'modify',
        path: 'src/routes/FirebaseListener.jsx',
        // Pattern tells plop where in the file to inject the template
        pattern: 'useFirebaseConnect([',
        // templateFile: 'plop-templates/fragment-templates/page//{{type}}-MainContent.jsx.hbs'
        templateFile: 'plop-templates/page-templates/_fragments//{{lowerCase type}}/FirebaseListener.jsx.hbs'

      }
    ]
    return actions
  }
}
