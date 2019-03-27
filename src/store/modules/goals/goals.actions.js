import {
	ADD_GOAL,
	ADD_GOAL_FAILURE,
	ADD_GOAL_SUCCESS,
	EDIT_GOAL,
	EDIT_GOAL_FAILURE,
	EDIT_GOAL_SUCCESS,
	GET_GOALS,
	GET_GOALS_FAILURE,
	GET_GOALS_SUCCESS,
	REALIZE_GOAL,
	REALIZE_GOAL_FAILURE,
	REALIZE_GOAL_SUCCESS,
	REMOVE_GOAL,
	REMOVE_GOAL_FAILURE,
	REMOVE_GOAL_SUCCESS
} from './goals.mutation-types'

export const goalsActions = {
	async [GET_GOALS] ({ dispatch }, payload) {
		await dispatch(GET_GOALS_SUCCESS, payload)
	},
	[GET_GOALS_SUCCESS] ({ commit }, payload) {
		commit(GET_GOALS_SUCCESS, payload)
	},
	[GET_GOALS_FAILURE] ({ commit }) {
	},
	async [ADD_GOAL] ({ dispatch }, payload) {
		await dispatch(ADD_GOAL_SUCCESS, payload)
	},
	[ADD_GOAL_SUCCESS] ({ commit }, payload) {
		commit(ADD_GOAL_SUCCESS, payload)
	},
	[ADD_GOAL_FAILURE] ({ commit }) {
	},
	async [EDIT_GOAL] ({ dispatch }, payload) {
		await dispatch(EDIT_GOAL_SUCCESS, payload)
	},
	[EDIT_GOAL_SUCCESS] ({ commit }, payload) {
		commit(EDIT_GOAL_SUCCESS, payload)
	},
	[EDIT_GOAL_FAILURE] ({ commit }) {
	},
	async [REMOVE_GOAL] ({ dispatch }, payload) {
		await dispatch(REMOVE_GOAL_SUCCESS, payload)
	},
	[REMOVE_GOAL_SUCCESS] ({ commit }, payload) {
		commit(REMOVE_GOAL_SUCCESS, payload)
	},
	[REMOVE_GOAL_FAILURE] ({ commit }) {
	},
	async [REALIZE_GOAL] ({ dispatch }, payload) {
		await dispatch(REALIZE_GOAL_SUCCESS, payload)
	},
	[REALIZE_GOAL_SUCCESS] ({ commit }, payload) {
		commit(REALIZE_GOAL_SUCCESS, payload)
	},
	[REALIZE_GOAL_FAILURE] ({ commit }) {
	}
}
