module.exports = function (plop) {
	// controller generator
	plop.setGenerator('field', {
		description: 'create a field control to be used in react final forms',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'field name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/app/fields/{{name}}.js',
				templateFile: 'plop-templates/InputField.js.hbs',
			},
		],
	});

	plop.setGenerator('duck', {
		description: 'create a redux slice with redux-toolkit',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'duck name?',
			},
		],
		actions: [
			{
				type: 'add',
				path: 'src/app/store/ducks/{{name}}.duck.js',
				templateFile: 'plop-templates/Duck.js.hbs',
			},
			{
				type: 'add',
				path: 'src/app/store/ducks/{{name}}.duck.spec.js',
				templateFile: 'plop-templates/Duck.spec.js.hbs',
			},
			{
				// Action type 'append' injects a template into an existing file
				type: 'append',
				path: 'src/app/store/root-reducer.js',
				// Pattern tells plop where in the file to inject the template
				pattern: `import { combineReducers } from 'redux';`,
				template: `import {{name}} from './ducks/{{name}}.duck';`,
			},
			{
				// Action type 'append' injects a template into an existing file
				type: 'append',
				path: 'src/app/store/root-reducer.js',
				// Pattern tells plop where in the file to inject the template
				pattern: `auth,`,
				template: `{{name}},`,
			},
		],
	});
};
