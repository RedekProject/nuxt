// RENDER
// ----------------------------------------------------------------------------
const RENDER = {
	bundleRenderer: {
		shouldPreload: (file, type) => ['script', 'style', 'font'].includes(type),
	},
}

// CACHE
// ----------------------------------------------------------------------------
	const CACHE = {
		max: 1000,
		maxAge: 900000,
	}

// LOADING
// ----------------------------------------------------------------------------
	const LOADING = {
		BASE: {
			color: '#555566',
		},
		INDICATOR: {
			name: 'cube-grid',
			color: '#1976D2',
			background: '#1e1e1e',
		},
	}

// ENVIRONMENT
// ----------------------------------------------------------------------------
	const ENV = {
		{{#axios}}
		API_URL: process.env.API_URL || 'https://api.domain.com',
		{{/axios}}
		URI: process.env.URI || 'https://www.domain.com',
	}

// EXPORT
// ----------------------------------------------------------------------------
	module.exports = {
		CACHE,
		LOADING,
		ENV,
		RENDER,
	}
