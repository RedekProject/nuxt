// VARIABLES
// ----------------------------------------------------------------------------
	const TITLE = '{{ name }}'
	const DESCRIPTION = '{{ description }}'
	const CONFIG = require('./general')

// HEAD CONFIGURATIONS
// ----------------------------------------------------------------------------
	const SEO = {
		title: TITLE,
		titleTemplate: `%s | ${TITLE}`,
		meta: [
			// => BASICS
			{
				charset: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
			},
			{
				hid: 'description',
				name: 'description',
				content: DESCRIPTION,
			},
			{
				hid: 'author',
				name: 'author',
				content: 'Ludwig Informatique',
			},
			// => OpenGraph
			{
				hid: 'og:locale',
				property: 'og:locale',
				content: 'fr_FR',
			},
			{
				hid: 'og:type',
				property: 'og:type',
				content: 'website',
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: TITLE,
			},
			{
				hid: 'og:description',
				property: 'og:description',
				content: DESCRIPTION,
			},
			{
				hid: 'og:url',
				property: 'og:url',
				content: CONFIG.ENV.URI,
			},
			{
				hid: 'og:site_name',
				property: 'og:site_name',
				content: TITLE,
			},
			// => Twitter
			{
				hid: 'twitter:card',
				property: 'twitter:card',
				content: 'summary',
			},
			{
				hid: 'twitter:description',
				property: 'twitter:description',
				content: DESCRIPTION,
			},
			{
				hid: 'twitter:title',
				property: 'twitter:title',
				content: TITLE,
			},
		],
		link: [{
				rel: 'canonical',
				href: CONFIG.ENV.URI,
			},
			{
				rel: 'icon',
				type: 'image/x-icon',
				href: '/images/favicon.ico',
			},
			{
				rel: 'apple-touch-icon',
				href: '/images/favicon.ico',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '114x144',
				href: '/images/favicon.ico',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '72x72',
				href: '/images/favicon.ico',
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons',
			},
			{
				rel: 'stylesheet',
				href: 'https://use.fontawesome.com/releases/v5.0.9/css/all.css',
				integrity: 'sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1',
				crossorigin: 'anonymous',
			},
			{
				rel: 'stylesheet',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css',
			},
		],
	}

// CSS / STYL / SCSS CONFIGURATIONS
// ----------------------------------------------------------------------------
	const CSS = [
		'~/assets/style/styl/app.styl',
		{{#sass}}
		'~/assets/style/scss/styles.scss',
		{{else}}
		'~/assets/style/css/styles.css',
		{{/sass}}
	]

// EXPORT
// ----------------------------------------------------------------------------
	module.exports = {
		SEO,
		CSS,
	}
