import { HIDE_LOADER, SHOW_LOADER } from './loader.mutations-types'

export const loaderMutations = {
	[SHOW_LOADER] (state) {
		state.visible = true
	},
	[HIDE_LOADER] (state) {
		state.visible = false
	}
}
