{{#alacarte}}
const nodeExternals = require('webpack-node-externals')
{{/alacarte}}

// VENDOR
// ----------------------------------------------------------------------------
	const VENDORS = [
		{{#babelpolyfill}}
		'babel-polyfill',
		'eventsource-polyfill',
		{{/babelpolyfill}}
		'vuetify',
		'~/plugins/vuetify.js',
	]

// BUILDS
// ----------------------------------------------------------------------------
	module.exports = {
		{{#alacarte}}
		// => Babel
			babel: {
				plugins: [
					['transform-imports', {
						vuetify: {
							// eslint-disable-next-line
							transform: 'vuetify/es5/components/${member}',
							preventFullImport: true,
						},
					}],
				],
			},
		{{/alacarte}}
		// => JS
			vendor: VENDORS,
		// => CSS
			extractCSS: true,
		// => Extends webpack
			extend (config, ctx) {
				{{#babelpolyfill}}
				// => Babel
					if (ctx.client) {
						config.entry.vendor.push('babel-polyfill')
						config.entry.vendor.push('eventsource-polyfill')
					}

				{{/babelpolyfill}}
				// => Extend dev tool
					if (ctx.isDev && ctx.client) {
						config.devtool = (ctx.isDev ? 'eval-source-map' : false)
					}

				// => Eslint loader
					if (ctx.isDev && ctx.client) {
						config.module.rules.push({
							enforce: 'pre',
							test: /\.(js|vue)$/,
							loader: 'eslint-loader',
							exclude: /(node_modules)/,
						})
					}

				{{#alacarte}}
				// => Vuetify a la carte
					if (ctx.isServer) {
						config.externals = [
							nodeExternals({
								whitelist: [/^vuetify/],
							}),
						]
					}

				{{/alacarte}}
				return config
			},
	}
