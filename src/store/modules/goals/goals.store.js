import { goalsMutations } from './goals.mutations'
import { goalsActions } from './goals.actions'
import { goalsAdapter } from './goals.adapter'

export const goalsStore = {
	state: goalsAdapter.getInitialState(),
	mutations: goalsMutations,
	actions: goalsActions,
	getters: {}
}
