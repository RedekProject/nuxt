/**
/* Script name : meta.js
/* Description : Prepare template
/* Author : Redek Project
**/

module.exports = {
	helpers: {
		raw: function(options) {
			return options.fn(this)
		}
	},
	prompts: {
		name: {
			'type': 'string',
			'required': true,
			'message': 'Project name'
		},
		description: {
			'type': 'string',
			'required': false,
			'message': 'Project description',
			'default': 'Nuxt.js + Vuetify.js project'
		},
		author: {
			'type': 'string',
			'message': 'Author'
		},
		spa: {
			'type': 'confirm',
			'message': 'Your site is a SPA ?',
			'default': false
		},
		axios: {
			'type': 'confirm',
			'message': 'Use @nuxtjs/axios components ?',
			'default': false
		},
		router: {
			'type': 'confirm',
			'message': 'Use @nuxtjs/router components ?',
			'default': false
		},
		sitemap: {
			'type': 'confirm',
			'message': 'Use @nuxtjs/sitemap components ?',
			'default': false
		},
		alacarte: {
			'type': 'confirm',
			'message': 'Use a-la-carte components ?',
			'default': false
		},
		babelpolyfill: {
			'type': 'confirm',
			'message': 'Use Babel-Polyfill components ?',
			'default': false
		},
		sass: {
			'type': 'confirm',
			'message': 'Use SCSS preprocessor ?',
			'default': false
		},
		pug: {
			'type': 'confirm',
			'message': 'Use PUG preprocessor ?',
			'default': false
		},
	},
	filters: {
		'src/router.js': 'router',
		'src/views/**/*': 'router',
		'src/pages/**/*': '!router',
		'src/**/*.pug': 'pug',
		'src/**/*.html': '!pug',
		'src/**/*.scss': 'sass',
		'src/**/*.css': '!sass'
	},
	completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
