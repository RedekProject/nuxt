// => Base : @slynova/eslint-config

'use strict'

module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		browser: true,
		node: true
	},
	plugins: [
	  'html'
	],
	extends: [
		'./rules/bestPractices',
		'./rules/errors',
		'./rules/es6',
		'./rules/node',
		'./rules/style',
		'./rules/variables',
	].map(require.resolve),
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
		  experimentalObjectRestSpread: true,
		}
	},
}
