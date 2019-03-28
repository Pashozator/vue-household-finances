import { HIDE_LOADER, SHOW_LOADER } from './loader.mutations-types'

export const loaderActions = {
	[SHOW_LOADER] ({ commit }) {
		commit(SHOW_LOADER)
	},
	[HIDE_LOADER] ({ commit }) {
		commit(HIDE_LOADER)
	}
}
