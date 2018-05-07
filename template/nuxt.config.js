// IMPORTER
// ----------------------------------------------------------------------------
	const GENERAL = require('./config/general')
	const HEAD = require('./config/head')
	const MODULES = require('./config/modules')
	const PLUGINS = require('./config/plugins')
	const ROUTER = require('./config/router')
	const BUILDER = require('./config/build')

// NUXT CONFIG
// ----------------------------------------------------------------------------
	module.exports = {
		{{#spa}}
		// => SPA
			mode: 'spa',
			{{#router}}
			generate: {
				routes: [
					'/',
				],
			},
			{{/router}}
		{{/spa}}
		// => Headers of the page
			// => SEO
				head: HEAD.SEO,
			// => CSS
				css: HEAD.CSS,
		// => Use lru-cache to allow cached components for better render performances
			cache: GENERAL.CACHE,
			render: GENERAL.RENDER,
		// => Customize the progress bar color
			loading: GENERAL.LOADING.BASE,
			loadingIndicator: GENERAL.LOADING.INDICATOR,
		// => Environment
			env: GENERAL.ENV,
		// => Module
			modules: MODULES.IMPORT,
			sitemap: MODULES.SITEMAP,
			axios: MODULES.AXIOS,
		// => Plugins
			plugins: PLUGINS.IMPORT,
		// => Router
			router: ROUTER,
		// => Src directory
			srcDir: 'src/',
		// => Build configuration
			build: BUILDER,
	}
