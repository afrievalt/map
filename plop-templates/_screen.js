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
        destination: './',
        base: 'plop-templates/-templates/',
        templateFiles: 'plop-templates/-templates/*.hbs'
      }
    ]
    return actions
  }
}
