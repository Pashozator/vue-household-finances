import { goalsMutations } from './goals.mutations'
import { goalsActions } from './goals.actions'
import { EntityAdapter } from 'entity-adapter'

export const goalsStore = {
	state: new EntityAdapter(),
	mutations: goalsMutations,
	actions: goalsActions,
	getters: {}
}
