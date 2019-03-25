import Vue from 'vue'
import Vuex from 'vuex'
import { goalsStore } from './modules/goals/goals.store'
import { getGoals } from './modules/goals/goals.getters'
import { budgetStore } from './modules/budget/budget.store'
import { getDebit, getOperations } from './modules/budget/budget.getters'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		budget: budgetStore,
		goals: goalsStore
	},
	state: {},
	mutations: {},
	actions: {},
	getters: {
		getGoals: getGoals,
		getDebit: getDebit,
		getOperations: getOperations
	}
})
