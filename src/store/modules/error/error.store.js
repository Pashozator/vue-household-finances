import { errorMutations } from './error.mutations'
import { errorActions } from './error.actions'

export const errorStore = {
	state: {
		visibility: false
	},
	mutations: errorMutations,
	actions: errorActions,
	getters: {}
}
