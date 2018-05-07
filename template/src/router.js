import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '~/views/home'
import InspirePage from '~/views/inspire'

Vue.use(Router)

export function createRouter () {
	return new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				alias: '/home',
				name: 'home',
				component: HomePage,
			},
			{
				path: '/inspire',
				name: 'inspire',
				component: InspirePage
			}
		],
	})
}
