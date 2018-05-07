'use strict'

module.exports = {
	rules: {
		// See: https://eslint.org/docs/rules/accessor-pairs
		'accessor-pairs': 'off',

		// See: https://eslint.org/docs/rules/array-callback-return
		'array-callback-return': ['error', {
			allowImplicit: true,
		}],

		// See: https://eslint.org/docs/rules/block-scoped-var
		'block-scoped-var': 'error',

		// See: https://eslint.org/docs/rules/class-methods-use-this
		'class-methods-use-this': 'off',

		// See: https://eslint.org/docs/rules/complexity
		complexity: 'off',

		// See: https://eslint.org/docs/rules/consistent-return
		'consistent-return': 'off',

		// See: https://eslint.org/docs/rules/curly
		curly: ['error', 'all'],

		// See: https://eslint.org/docs/rules/default-case
		'default-case': ['error', {
			commentPattern: '^no default$',
		}],

		// See: https://eslint.org/docs/rules/dot-location
		'dot-location': ['error', 'property'],

		// See: https://eslint.org/docs/rules/dot-notation
		'dot-notation': ['error', {
			allowKeywords: true,
		}],

		// See: https://eslint.org/docs/rules/eqeqeq
		eqeqeq: ['error', 'always', {
			null: 'ignore',
		}],

		// See: https://eslint.org/docs/rules/guard-for-in
		'guard-for-in': 'error',

		// See: https://eslint.org/docs/rules/no-alert
		'no-alert': 'warn',

		// See: https://eslint.org/docs/rules/no-caller
		'no-caller': 'error',

		// See: https://eslint.org/docs/rules/no-case-declarations
		'no-case-declarations': 'error',

		// See: https://eslint.org/docs/rules/no-div-regex
		'no-div-regex': 'off',

		// See: https://eslint.org/docs/rules/no-else-return
		'no-else-return': ['error', {
			allowElseIf: false,
		}],

		// See: https://eslint.org/docs/rules/no-empty-function
		'no-empty-function': ['error'],

		// See: https://eslint.org/docs/rules/no-empty-pattern
		'no-empty-pattern': 'error',

		// See: https://eslint.org/docs/rules/no-eq-null
		'no-eq-null': 'off',

		// See: https://eslint.org/docs/rules/no-eval
		'no-eval': 'error',

		// See: https://eslint.org/docs/rules/no-extend-native
		'no-extend-native': 'error',

		// See: https://eslint.org/docs/rules/no-extra-bind
		'no-extra-bind': 'error',

		// See: https://eslint.org/docs/rules/no-extra-label
		'no-extra-label': 'error',

		// See: https://eslint.org/docs/rules/no-fallthrough
		'no-fallthrough': 'error',

		// See: https://eslint.org/docs/rules/no-floating-decimal
		'no-floating-decimal': 'error',

		// See: https://eslint.org/docs/rules/no-global-assign
		'no-global-assign': ['error', {
			exceptions: [],
		}],

		// See: https://eslint.org/docs/rules/no-implicit-coercion
		'no-implicit-coercion': ['off', {
			boolean: false,
			number: true,
			string: true,
			allow: [],
		}],

		// See: https://eslint.org/docs/rules/no-implicit-globals
		'no-implicit-globals': 'off',

		// See: https://eslint.org/docs/rules/no-implied-eval
		'no-implied-eval': 'error',

		// See: https://eslint.org/docs/rules/no-invalid-this
		'no-invalid-this': 'error',

		// See: https://eslint.org/docs/rules/no-iterator
		'no-iterator': 'error',

		// See: https://eslint.org/docs/rules/no-labels
		'no-labels': ['error', {
			allowLoop: false,
			allowSwitch: false,
		}],

		// See: https://eslint.org/docs/rules/no-lone-blocks
		'no-lone-blocks': 'error',

		// See: https://eslint.org/docs/rules/no-loop-func
		'no-loop-func': 'error',

		// See: https://eslint.org/docs/rules/no-magic-numbers
		'no-magic-numbers': ['off', {
			ignore: [],
			ignoreArrayIndexes: true,
			enforceConst: true,
			detectObjects: false,
		}],

		// See: https://eslint.org/docs/rules/no-multi-spaces
		'no-multi-spaces': ['error', {
			ignoreEOLComments: false,
		}],

		// See: https://eslint.org/docs/rules/no-multi-str
		'no-multi-str': 'error',

		// See: https://eslint.org/docs/rules/no-new
		'no-new': 'error',

		// See: https://eslint.org/docs/rules/no-new-func
		'no-new-func': 'error',

		// See: https://eslint.org/docs/rules/no-new-wrappers
		'no-new-wrappers': 'error',

		// See: https://eslint.org/docs/rules/no-octal
		'no-octal': 'error',

		// See: https://eslint.org/docs/rules/no-octal-escape
		'no-octal-escape': 'error',

		// See: https://eslint.org/docs/rules/no-param-reassign
		'no-param-reassign': 'off',

		// See: https://eslint.org/docs/rules/no-proto
		'no-proto': 'error',

		// See: https://eslint.org/docs/rules/no-redeclare
		'no-redeclare': 'error',

		// See: https://eslint.org/docs/rules/no-restricted-properties
		'no-restricted-properties': ['error', {
			object: 'arguments',
			property: 'callee',
			message: 'arguments.callee is deprecated',
		}, {
			object: 'global',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'self',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'window',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		}, {
			object: 'global',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			object: 'self',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			object: 'window',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		}, {
			property: '__defineGetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			property: '__defineSetter__',
			message: 'Please use Object.defineProperty instead.',
		}, {
			object: 'Math',
			property: 'pow',
			message: 'Use the exponentiation operator (**) instead.',
		}],

		// See: https://eslint.org/docs/rules/no-return-assign
		'no-return-assign': ['error', 'always'],

		// See: https://eslint.org/docs/rules/no-return-await
		'no-return-await': 'error',

		// See: https://eslint.org/docs/rules/no-script-url
		'no-script-url': 'error',

		// See: https://eslint.org/docs/rules/no-self-assign
		'no-self-assign': 'error',

		// See: https://eslint.org/docs/rules/no-self-compare
		'no-self-compare': 'error',

		// See: https://eslint.org/docs/rules/no-sequences
		'no-sequences': 'error',

		// See: https://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 'error',

		// See: https://eslint.org/docs/rules/no-unmodified-loop-condition
		'no-unmodified-loop-condition': 'off',

		// See: https://eslint.org/docs/rules/no-unused-expressions
		'no-unused-expressions': ['error', {
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: false,
		}],

		// See: https://eslint.org/docs/rules/no-unused-labels
		'no-unused-labels': 'error',

		// See: https://eslint.org/docs/rules/no-useless-call
		'no-useless-call': 'off',

		// See: https://eslint.org/docs/rules/no-useless-concat
		'no-useless-concat': 'error',

		// See: https://eslint.org/docs/rules/no-useless-escape
		'no-useless-escape': 'error',

		// See: https://eslint.org/docs/rules/no-useless-return
		'no-useless-return': 'error',

		// See: https://eslint.org/docs/rules/no-void
		'no-void': 'error',

		// See: https://eslint.org/docs/rules/no-warning-comments
		'no-warning-comments': ['off'],

		// See: https://eslint.org/docs/rules/no-with
		'no-with': 'error',

		// See: https://eslint.org/docs/rules/prefer-promise-reject-errors
		'prefer-promise-reject-errors': ['error', {
			allowEmptyReject: true,
		}],

		// See: https://eslint.org/docs/rules/radix
		radix: 'error',

		// See: https://eslint.org/docs/rules/require-await
		'require-await': 'error',

		// See: https://eslint.org/docs/rules/vars-on-top
		'vars-on-top': 'error',

		// See: https://eslint.org/docs/rules/wrap-iife
		'wrap-iife': ['error', 'outside', {
			functionPrototypeMethods: false,
		}],

		// See: https://eslint.org/docs/rules/yoda
		yoda: 'error',
	},
}
