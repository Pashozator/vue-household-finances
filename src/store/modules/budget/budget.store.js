import { EntityAdapter } from 'entity-adapter'
import { budgetMutations } from './budget.mutations'
import { budgetActions } from './budget.actions'

export const budgetStore = {
	state: {
		operations: new EntityAdapter(),
		debit: 0
	},
	mutations: budgetMutations,
	actions: budgetActions,
	getters: {}
}
