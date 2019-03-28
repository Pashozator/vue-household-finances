import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			redirect: { name: 'history' }
		},
		{
			path: '/history',
			name: 'history',
			component: () => import('./views/History.vue')
		},
		{
			path: '/goals',
			name: 'goals',
			component: () => import('./views/Goals.vue')
		}
	]
})
