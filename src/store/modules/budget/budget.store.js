import { budgetMutations } from './budget.mutations'
import { budgetActions } from './budget.actions'
import { budgetAdapter } from './budget.adapter'

export const budgetStore = {
	state: {
		operations: budgetAdapter.getInitialState(),
		debit: 0
	},
	mutations: budgetMutations,
	actions: budgetActions,
	getters: {}
}
