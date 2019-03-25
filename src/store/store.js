import Vue from 'vue'
import Vuex from 'vuex'
import { goalsStore } from './modules/goals/goals.store'
import { getGoals } from './modules/goals/goals.getters'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		goals: goalsStore
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {
		getGoals: getGoals
	}
})
