import { HIDE_ERROR, SHOW_ERROR } from './error.mutations-types'

export const errorActions = {
	[SHOW_ERROR] ({ commit }) {
		commit(SHOW_ERROR)
	},
	[HIDE_ERROR] ({ commit }) {
		commit(HIDE_ERROR)
	}
}
