'use strict'

module.exports = {
	rules: {
		// See: https://eslint.org/docs/rules/array-bracket-newline
		'array-bracket-newline': 'off',

		// See: https://eslint.org/docs/rules/array-bracket-spacing
		'array-bracket-spacing': ['error', 'never'],

		// See: https://eslint.org/docs/rules/array-element-newline
		'array-element-newline': 'off',

		// See: https://eslint.org/docs/rules/block-spacing
		'block-spacing': ['error', 'always'],

		// See: https://eslint.org/docs/rules/brace-style
		'brace-style': ['error', '1tbs', {
			allowSingleLine: false,
		}],

		// See: https://eslint.org/docs/rules/camelcase
		camelcase: ['error', {
			properties: 'never',
		}],

		// See: https://eslint.org/docs/rules/capitalized-comments
		'capitalized-comments': 'off',

		// See: https://eslint.org/docs/rules/&-dangle
		'comma-dangle': ['error', {
			arrays: 'always-multiline',
			objects: 'always-multiline',
			imports: 'always-multiline',
			exports: 'always-multiline',
			functions: 'always-multiline',
		}],

		// See: https://eslint.org/docs/rules/comma-spacing
		'comma-spacing': ['error', {
			before: false,
			after: true,
		}],

		// See: https://eslint.org/docs/rules/comma-style
		'comma-style': ['error', 'last', {
			exceptions: {
				ArrayExpression: false,
				ArrayPattern: false,
				ArrowFunctionExpression: false,
				CallExpression: false,
				FunctionDeclaration: false,
				FunctionExpression: false,
				ImportDeclaration: false,
				ObjectExpression: false,
				ObjectPattern: false,
				VariableDeclaration: false,
				NewExpression: false,
			},
		}],

		// See: https://eslint.org/docs/rules/computed-property-spacing
		'computed-property-spacing': ['error', 'never'],

		// See: https://eslint.org/docs/rules/consistent-this
		'consistent-this': 'off',

		// See: https://eslint.org/docs/rules/eol-last
		'eol-last': ['error', 'always'],

		// See: https://eslint.org/docs/rules/func-call-spacing
		'func-call-spacing': ['error', 'never'],

		// See: https://eslint.org/docs/rules/func-name-matching
		'func-name-matching': 'off',

		// See: https://eslint.org/docs/rules/func-names
		'func-names': 'warn',

		// See: https://eslint.org/docs/rules/func-style
		'func-style': ['error', 'declaration', {
			allowArrowFunctions: false,
		}],

		// See: https://eslint.org/docs/rules/function-paren-newline
		'function-paren-newline': ['error', 'multiline'],

		// See: https://eslint.org/docs/rules/id-blacklist
		'id-blacklist': 'off',

		// See: https://eslint.org/docs/rules/id-length
		'id-length': 'off',

		// See: https://eslint.org/docs/rules/id-match
		'id-match': 'off',

		// See: https://eslint.org/docs/rules/implicit-arrow-linebreak
		'implicit-arrow-linebreak': ['error', 'beside'],

		// See: https://eslint.org/docs/rules/indent
		// indent: ['error', 'tab', {
		// 	SwitchCase: 1,
		// 	VariableDeclarator: 1,
		// 	outerIIFEBody: 1,
		// 	// MemberExpression: null,
		// 	FunctionDeclaration: {
		// 		parameters: 1,
		// 		body: 1
		// 	},
		// 	FunctionExpression: {
		// 		parameters: 1,
		// 		body: 1
		// 	},
		// 	CallExpression: {
		// 		arguments: 1
		// 	},
		// 	ArrayExpression: 1,
		// 	ObjectExpression: 1,
		// 	ImportDeclaration: 1,
		// 	flatTernaryExpressions: false,
		// 	// list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
		// 	ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
		// 	ignoreComments: false
		// }],
		indent: 0,

		// See: https://eslint.org/docs/rules/jsx-quotes
		'jsx-quotes': ['error', 'prefer-double'],

		// See: https://eslint.org/docs/rules/key-spacing
		'key-spacing': ['error', {
			beforeColon: false,
			afterColon: true,
		}],

		// See: https://eslint.org/docs/rules/keyword-spacing
		'keyword-spacing': ['error', {
			before: true,
			after: true,
			overrides: {
				return: {
					after: true,
				},
				throw: {
					after: true,
				},
				case: {
					after: true,
				},
			},
		}],

		// See: https://eslint.org/docs/rules/line-comment-position
		'line-comment-position': ['error', {
			position: 'above',
			ignorePattern: '',
			applyDefaultIgnorePatterns: true,
		}],

		// See: https://eslint.org/docs/rules/linebreak-style
		'linebreak-style': ['error', 'unix'],

		// See: https://eslint.org/docs/rules/lines-around-comment
		'lines-around-comment': 'off',

		// See: https://eslint.org/docs/rules/lines-between-class-members
		'lines-between-class-members': ['error', 'always', {
			exceptAfterSingleLine: false,
		}],

		// See: https://eslint.org/docs/rules/max-depth
		'max-depth': 'off',

		// See: https://eslint.org/docs/rules/max-len
		'max-len': ['error', 100, 2, {
			ignoreUrls: true,
			ignoreComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		}],

		// See: https://eslint.org/docs/rules/max-lines
		'max-lines': 'off',

		// See: https://eslint.org/docs/rules/max-nested-callbacks
		'max-nested-callbacks': 'off',

		// See: https://eslint.org/docs/rules/max-params
		'max-params': 'off',

		// See: https://eslint.org/docs/rules/max-statements
		'max-statements': 'off',

		// See: https://eslint.org/docs/rules/max-statements-per-line
		'max-statements-per-line': ['error', {
			max: 1,
		}],

		// See: https://eslint.org/docs/rules/multiline-comment-style
		// 'multiline-comment-style': ['error', 'starred-block'],
		'multiline-comment-style': 0,

		// See: https://eslint.org/docs/rules/multiline-ternary
		'multiline-ternary': 'off',

		// See: https://eslint.org/docs/rules/new-cap
		'new-cap': ['error', {
			newIsCap: true,
			newIsCapExceptions: [],
			capIsNew: false,
			capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
		}],

		// See: https://eslint.org/docs/rules/new-parens
		'new-parens': 'error',

		// See: https://eslint.org/docs/rules/newline-per-chained-call
		'newline-per-chained-call': ['error', {
			ignoreChainWithDepth: 4,
		}],

		// See: https://eslint.org/docs/rules/no-array-constructor
		'no-array-constructor': 'error',

		// See: https://eslint.org/docs/rules/no-bitwise
		'no-bitwise': 'error',

		// See: https://eslint.org/docs/rules/no-continue
		'no-continue': 'error',

		// See: https://eslint.org/docs/rules/no-inline-comments
		'no-inline-comments': 'off',

		// See: https://eslint.org/docs/rules/no-lonely-if
		'no-lonely-if': 'error',

		// See: https://eslint.org/docs/rules/no-mixed-operators
		'no-mixed-operators': ['error', {
			// the list of arthmetic groups disallows mixing `%` and `**`
			// with other arithmetic operators.
			groups: [
				['%', '**'],
				['%', '+'],
				['%', '-'],
				['%', '*'],
				['%', '/'],
				['**', '+'],
				['**', '-'],
				['**', '*'],
				['**', '/'],
				['&', '|', '^', '~', '<<', '>>', '>>>'],
				['==', '!=', '===', '!==', '>', '>=', '<', '<='],
				['&&', '||'],
				['in', 'instanceof'],
			],
			allowSamePrecedence: false,
		}],

		// See: https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
		'no-mixed-spaces-and-tabs': 'error',

		// See: https://eslint.org/docs/rules/no-multi-assign
		'no-multi-assign': ['error'],

		// See: https://eslint.org/docs/rules/no-multiple-empty-lines
		'no-multiple-empty-lines': ['error', {
			max: 2,
			maxEOF: 1,
		}],

		// See: https://eslint.org/docs/rules/no-negated-condition
		'no-negated-condition': 'off',

		// See: https://eslint.org/docs/rules/no-nested-ternary
		'no-nested-ternary': 'error',

		// See: https://eslint.org/docs/rules/no-new-object
		'no-new-object': 'error',

		// See: https://eslint.org/docs/rules/no-plusplus
		'no-plusplus': 'error',

		// See: https://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'ForOfStatement',
				message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],

		// See: https://eslint.org/docs/rules/no-tabs
		// 'no-tabs': 'error',
		'no-tabs': 0,

		// See: https://eslint.org/docs/rules/no-ternary
		'no-ternary': 'off',

		// See: https://eslint.org/docs/rules/no-trailing-spaces
		'no-trailing-spaces': ['error', {
			skipBlankLines: false,
			ignoreComments: false,
		}],

		// See: https://eslint.org/docs/rules/no-underscore-dangle
		'no-underscore-dangle': 'off',

		// See: https://eslint.org/docs/rules/no-unneeded-ternary
		'no-unneeded-ternary': ['error', {
			defaultAssignment: false,
		}],

		// See: https://eslint.org/docs/rules/no-whitespace-before-property
		'no-whitespace-before-property': 'error',

		// See: https://eslint.org/docs/rules/nonblock-statement-body-position
		'nonblock-statement-body-position': ['error', 'beside', {
			overrides: {},
		}],

		// See: https://eslint.org/docs/rules/object-curly-newline
		'object-curly-newline': ['error', {
			ObjectExpression: {
				minProperties: 4,
				multiline: true,
				consistent: true,
			},
			ObjectPattern: {
				minProperties: 4,
				multiline: true,
				consistent: true,
			},
			ImportDeclaration: {
				minProperties: 4,
				multiline: true,
				consistent: true,
			},
			ExportDeclaration: {
				minProperties: 4,
				multiline: true,
				consistent: true,
			},
		}],

		// See: https://eslint.org/docs/rules/object-curly-spacing
		'object-curly-spacing': ['error', 'always'],

		// See: https://eslint.org/docs/rules/object-property-newline
		'object-property-newline': ['error', {
			allowAllPropertiesOnSameLine: true,
		}],

		// See: https://eslint.org/docs/rules/one-var
		'one-var': ['error', 'never'],

		// See: https://eslint.org/docs/rules/one-var-declaration-per-line
		'one-var-declaration-per-line': ['error', 'always'],

		// See: https://eslint.org/docs/rules/operator-assignment
		'operator-assignment': ['error', 'always'],

		// See: https://eslint.org/docs/rules/operator-linebreak
		'operator-linebreak': ['error', 'before', {
			overrides: {
				'=': 'none',
			},
		}],

		// See: https://eslint.org/docs/rules/padded-blocks
		'padded-blocks': ['error', {
			blocks: 'never',
			classes: 'never',
			switches: 'never',
		}],

		// See: https://eslint.org/docs/rules/padding-line-between-statements
		'padding-line-between-statements': ['error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
			{
				blankLine: 'always',
				prev: ['const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			{
				blankLine: 'always',
				prev: 'block-like',
				next: 'block-like',
			},
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*',
			},
			{
				blankLine: 'any',
				prev: 'directive',
				next: 'directive',
			},
		],

		// See: https://eslint.org/docs/rules/quote-props.html
		'quote-props': ['error', 'as-needed', {
			keywords: false,
			unnecessary: true,
			numbers: false,
		}],

		// See: https://eslint.org/docs/rules/quotes
		quotes: ['error', 'single', {
			avoidEscape: true,
		}],

		// See: https://eslint.org/docs/rules/require-jsdoc
		'require-jsdoc': 'off',

		// See: https://eslint.org/docs/rules/semi
		semi: ['error', 'never'],

		// See: https://eslint.org/docs/rules/semi-spacing
		'semi-spacing': ['error', {
			before: false,
			after: true,
		}],

		// See: https://eslint.org/docs/rules/semi-style
		'semi-style': ['error', 'last'],

		// See: https://eslint.org/docs/rules/sort-keys
		'sort-keys': 'off',

		// See: https://eslint.org/docs/rules/sort-vars
		'sort-vars': 'off',

		// See: https://eslint.org/docs/rules/space-before-blocks
		'space-before-blocks': 'error',

		// See: https://eslint.org/docs/rules/space-before-function-paren
		'space-before-function-paren': ['error', 'always'],

		// See: https://eslint.org/docs/rules/space-in-parens
		'space-in-parens': ['error', 'never'],

		// See: https://eslint.org/docs/rules/space-infix-ops
		'space-infix-ops': 'error',

		// See: https://eslint.org/docs/rules/space-unary-ops
		'space-unary-ops': ['error', {
			words: true,
			nonwords: false,
			overrides: {},
		}],

		// See: https://eslint.org/docs/rules/spaced-comment
		// 'spaced-comment': ['error', 'always', {
		// 	line: {
		// 		exceptions: ['-', '+'],
		// 		markers: ['=', '!'], // space here to support sprockets directives
		// 	},
		// 	block: {
		// 		exceptions: ['-', '+'],
		// 		markers: ['=', '!'], // space here to support sprockets directives
		// 		balanced: true,
		// 	}
		// }],
		'spaced-comment': 0,

		// See: https://eslint.org/docs/rules/switch-colon-spacing
		'switch-colon-spacing': ['error', {
			after: true,
			before: false,
		}],

		// See: https://eslint.org/docs/rules/template-tag-spacing
		'template-tag-spacing': ['error', 'never'],

		// See: https://eslint.org/docs/rules/unicode-bom
		'unicode-bom': ['error', 'never'],

		// See: https://eslint.org/docs/rules/wrap-regex
		'wrap-regex': 'off',
	},
}
