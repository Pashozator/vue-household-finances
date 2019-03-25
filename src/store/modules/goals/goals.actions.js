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
	[GET_GOALS] ({ commit }, payload) {},
	[GET_GOALS_SUCCESS] ({ commit }, payload) {
		commit(GET_GOALS_SUCCESS, payload)
	},
	[GET_GOALS_FAILURE] ({ commit }) {},
	[ADD_GOAL] ({ commit }, payload) {
		commit(ADD_GOAL, payload)
	},
	[ADD_GOAL_SUCCESS] ({ commit }, payload) {
		commit(ADD_GOAL_SUCCESS, payload)
	},
	[ADD_GOAL_FAILURE] ({ commit }) {},
	[EDIT_GOAL] ({ commit }, payload) {},
	[EDIT_GOAL_SUCCESS] ({ commit }, payload) {
		commit(EDIT_GOAL_SUCCESS, payload)
	},
	[EDIT_GOAL_FAILURE] ({ commit }) {},
	[REMOVE_GOAL] ({ commit }, payload) {
		commit(REMOVE_GOAL, payload)
	},
	[REMOVE_GOAL_SUCCESS] ({ commit }, payload) {
		commit(REMOVE_GOAL_SUCCESS, payload)
	},
	[REMOVE_GOAL_FAILURE] ({ commit }) {},
	[REALIZE_GOAL] ({ commit }, payload) {},
	[REALIZE_GOAL_SUCCESS] ({ commit }, payload) {
		commit(REALIZE_GOAL_SUCCESS, payload)
	},
	[REALIZE_GOAL_FAILURE] ({ commit }) {}
}
