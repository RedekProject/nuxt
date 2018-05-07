'use strict'

const restrictedGlobals = require('eslint-restricted-globals')

module.exports = {
	rules: {
		// See: https://eslint.org/docs/rules/init-declarations
		'init-declarations': 'off',

		// See: https://eslint.org/docs/rules/no-catch-shadow
		'no-catch-shadow': 'off',

		// See: https://eslint.org/docs/rules/no-delete-var
		'no-delete-var': 'error',

		// See: https://eslint.org/docs/rules/no-label-var
		'no-label-var': 'error',

		// See: https://eslint.org/docs/rules/no-restricted-globals
		'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(restrictedGlobals),

		// See: https://eslint.org/docs/rules/no-shadow
		'no-shadow': 0,

		// See: https://eslint.org/docs/rules/no-shadow-restricted-names
		'no-shadow-restricted-names': 'error',

		// See: https://eslint.org/docs/rules/no-undef
		'no-undef': 'error',

		// See: https://eslint.org/docs/rules/no-undef-init
		'no-undef-init': 'error',

		// See: https://eslint.org/docs/rules/no-undefined
		'no-undefined': 'off',

		// See: https://eslint.org/docs/rules/no-unused-vars
		'no-unused-vars': ['error', {
			vars: 'all',
			args: 'after-used',
			ignoreRestSiblings: true,
		}],

		// See: https://eslint.org/docs/rules/no-use-before-define
		'no-use-before-define': ['error', {
			functions: true,
			classes: true,
			variables: true,
		}],
	},
}
