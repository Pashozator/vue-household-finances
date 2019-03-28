import { HIDE_ERROR, SHOW_ERROR } from './error.mutations-types'

export const errorMutations = {
	[SHOW_ERROR] (state) {
		state.visibility = true
	},
	[HIDE_ERROR] (state) {
		state.visibility = false
	}
}
