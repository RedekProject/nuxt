'use strict'

module.exports = {
	rules: {
		// See: https://eslint.org/docs/rules/for-direction
		'for-direction': 'error',

		// See: https://eslint.org/docs/rules/getter-return
		'getter-return': ['error', {
			allowImplicit: true,
		}],

		// See: https://eslint.org/docs/rules/no-await-in-loop
		'no-await-in-loop': 'error',

		// See: https://eslint.org/docs/rules/no-compare-neg-zero
		'no-compare-neg-zero': 'error',

		// See: https://eslint.org/docs/rules/no-cond-assign
		'no-cond-assign': ['error', 'always'],

		// See: https://eslint.org/docs/rules/no-console
		'no-console': 'warn',

		// See: https://eslint.org/docs/rules/no-constant-condition
		'no-constant-condition': 'warn',

		// See: https://eslint.org/docs/rules/no-control-regex
		'no-control-regex': 'error',

		// See: https://eslint.org/docs/rules/no-debugger
		'no-debugger': 'warn',

		// See: https://eslint.org/docs/rules/no-dupe-args
		'no-dupe-args': 'error',

		// See: https://eslint.org/docs/rules/no-dupe-keys
		'no-dupe-keys': 'error',

		// See: https://eslint.org/docs/rules/no-duplicate-case
		'no-duplicate-case': 'error',

		// See: https://eslint.org/docs/rules/no-empty
		'no-empty': 'error',

		// See: https://eslint.org/docs/rules/no-empty-character-class
		'no-empty-character-class': 'error',

		// See: https://eslint.org/docs/rules/no-ex-assign
		'no-ex-assign': 'error',

		// See: https://eslint.org/docs/rules/no-extra-boolean-cast
		'no-extra-boolean-cast': 'error',

		// See: https://eslint.org/docs/rules/no-extra-parens
		'no-extra-parens': ['off'],

		// See: https://eslint.org/docs/rules/no-extra-semi
		'no-extra-semi': 'error',

		// See: https://eslint.org/docs/rules/no-func-assign
		'no-func-assign': 'error',

		// See: https://eslint.org/docs/rules/no-inner-declarations
		'no-inner-declarations': 'error',

		// See: https://eslint.org/docs/rules/no-invalid-regexp
		'no-invalid-regexp': 'error',

		// See: https://eslint.org/docs/rules/no-irregular-whitespace
		'no-irregular-whitespace': 'error',

		// See: https://eslint.org/docs/rules/no-obj-calls
		'no-obj-calls': 'error',

		// See: https://eslint.org/docs/rules/no-prototype-builtins
		'no-prototype-builtins': 'error',

		// See: https://eslint.org/docs/rules/no-regex-spaces
		'no-regex-spaces': 'error',

		// See: https://eslint.org/docs/rules/no-sparse-arrays
		'no-sparse-arrays': 'error',

		// See: https://eslint.org/docs/rules/no-template-curly-in-string
		'no-template-curly-in-string': 'error',

		// See: https://eslint.org/docs/rules/no-unexpected-multiline
		'no-unexpected-multiline': 'error',

		// See: https://eslint.org/docs/rules/no-unreachable
		'no-unreachable': 'error',

		// See: https://eslint.org/docs/rules/no-unsafe-finally
		'no-unsafe-finally': 'error',

		// See: https://eslint.org/docs/rules/no-unsafe-negation
		'no-unsafe-negation': 'error',

		// See: https://eslint.org/docs/rules/use-isnan
		'use-isnan': 'error',

		// See: https://eslint.org/docs/rules/valid-jsdoc
		'valid-jsdoc': 'off',

		// See: https://eslint.org/docs/rules/valid-typeof
		'valid-typeof': ['error', {
			requireStringLiterals: true,
		}],
	},
}
