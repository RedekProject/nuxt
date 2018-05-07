'use strict'

module.exports = {
	env: {
		es6: true,
	},

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			generators: false,
			objectLiteralDuplicateProperties: false,
		},
	},

	rules: {
		// See: https://eslint.org/docs/rules/arrow-body-style
		'arrow-body-style': ['error', 'as-needed', {
			requireReturnForObjectLiteral: true,
		}],

		// See: https://eslint.org/docs/rules/arrow-parens
		'arrow-parens': ['error', 'as-needed', {
			requireForBlockBody: true,
		}],

		// See: https://eslint.org/docs/rules/arrow-spacing
		'arrow-spacing': ['error', {
			before: true,
			after: true,
		}],

		// See: https://eslint.org/docs/rules/constructor-super
		'constructor-super': 'error',

		// See: https://eslint.org/docs/rules/generator-star-spacing
		'generator-star-spacing': ['error', {
			before: true,
			after: true,
		}],

		// See: https://eslint.org/docs/rules/no-class-assign
		'no-class-assign': 'error',

		// See: https://eslint.org/docs/rules/no-confusing-arrow
		'no-confusing-arrow': ['error', {
			allowParens: true,
		}],

		// See: https://eslint.org/docs/rules/no-const-assign
		'no-const-assign': 'error',

		// See: https://eslint.org/docs/rules/no-dupe-class-members
		'no-dupe-class-members': 'error',

		// See: https://eslint.org/docs/rules/no-duplicate-imports
		'no-duplicate-imports': 'off',

		// See: https://eslint.org/docs/rules/no-new-symbol
		'no-new-symbol': 'error',

		// See: https://eslint.org/docs/rules/no-restricted-imports
		'no-restricted-imports': 'off',

		// See: https://eslint.org/docs/rules/no-this-before-super
		'no-this-before-super': 'error',

		// See: https://eslint.org/docs/rules/no-useless-computed-key
		'no-useless-computed-key': 'error',

		// See: https://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 'error',

		// See: https://eslint.org/docs/rules/no-useless-rename
		'no-useless-rename': ['error', {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		}],

		// See: https://eslint.org/docs/rules/no-var
		'no-var': 'error',

		// See: https://eslint.org/docs/rules/object-shorthand
		'object-shorthand': ['error', 'always', {
			ignoreConstructors: false,
			avoidQuotes: true,
		}],

		// See: https://eslint.org/docs/rules/prefer-arrow-callback
		'prefer-arrow-callback': ['error', {
			allowNamedFunctions: false,
			allowUnboundThis: true,
		}],

		// See: https://eslint.org/docs/rules/prefer-const
		'prefer-const': ['error', {
			destructuring: 'any',
			ignoreReadBeforeAssign: true,
		}],

		// See: https://eslint.org/docs/rules/prefer-destructuring
		// 'prefer-destructuring': ['error', {
		// 	VariableDeclarator: {
		// 		array: false,
		// 		object: true,
		// 	},
		// 	AssignmentExpression: {
		// 		array: true,
		// 		object: true,
		// 	},
		// }, {
		// 	enforceForRenamedProperties: false,
		// }],
		'prefer-destructuring': 0,

		// See: https://eslint.org/docs/rules/prefer-numeric-literals
		'prefer-numeric-literals': 'error',

		// See: https://eslint.org/docs/rules/prefer-reflect
		'prefer-reflect': 'off',

		// See: https://eslint.org/docs/rules/prefer-rest-params
		'prefer-rest-params': 'error',

		// See: https://eslint.org/docs/rules/prefer-spread
		'prefer-spread': 'error',

		// See: https://eslint.org/docs/rules/prefer-template
		'prefer-template': 'error',

		// See: https://eslint.org/docs/rules/require-yield
		'require-yield': 'error',

		// See: https://eslint.org/docs/rules/rest-spread-spacing
		'rest-spread-spacing': ['error', 'never'],

		// See: https://eslint.org/docs/rules/sort-imports
		'sort-imports': 'off',

		// See: https://eslint.org/docs/rules/symbol-description
		'symbol-description': 'error',

		// See: https://eslint.org/docs/rules/template-curly-spacing
		'template-curly-spacing': ['error', 'never'],

		// See: https://eslint.org/docs/rules/yield-star-spacing
		'yield-star-spacing': ['error', 'after'],
	},
}
