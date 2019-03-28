import { loaderMutations } from './loader.mutations'
import { loaderActions } from './loader.actions'

export const loaderStore = {
	state: {
		visible: false
	},
	mutations: loaderMutations,
	actions: loaderActions,
	getters: {}
}
