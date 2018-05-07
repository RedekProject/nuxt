// VARIABLES
// ----------------------------------------------------------------------------
	const CONFIG = require('./general')

// MODULES
// ----------------------------------------------------------------------------
	const IMPORT = [
		{{#axios}}
		'@nuxtjs/axios',
		{{/axios}}
		{{#sitemap}}
		'@nuxtjs/sitemap',
		{{/sitemap}}
		{{#router}}
		'@nuxtjs/router',
		{{/router}}
	]

// MODULES CONFIGURATIONS
// ----------------------------------------------------------------------------
	{{#axios}}
	// AXIOS
	// ----------------------------------------------------------------------------
		const AXIOS = {
			baseURL: CONFIG.ENV.API_URL,
		}
	{{/axios}}
	{{#sitemap}}
	// SITEMAP
	// ----------------------------------------------------------------------------
		const SITEMAP = {
			path: '/sitemap.xml',
			hostname: CONFIG.ENV.URI,
			cacheTime: 1000 * 60 * 15,
			generate: false,
		}
	{{/sitemap}}
// EXPORT
// ----------------------------------------------------------------------------
	module.exports = {
		IMPORT,
		{{#axios}}
		AXIOS,
		{{/axios}}
		{{#sitemap}}
		SITEMAP,
		{{/sitemap}}
	}
