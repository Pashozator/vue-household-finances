import Vue from 'vue'
import Vuex from 'vuex'
import { goalsStore } from './modules/goals/goals.store'
import { getGoals } from './modules/goals/goals.getters'
import { budgetStore } from './modules/budget/budget.store'
import { getDebit, getOperations } from './modules/budget/budget.getters'
import { getLoaderState } from './modules/loader/loader.getters'
import { loaderStore } from './modules/loader/loader.store'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		budget: budgetStore,
		goals: goalsStore,
		loader: loaderStore
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {
		getGoals: getGoals,
		getDebit: getDebit,
		getOperations: getOperations,
		getLoaderState: getLoaderState
	}
})
