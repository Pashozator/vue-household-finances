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

export const goalsMutations = {
	[GET_GOALS] (state) {},
	[GET_GOALS_SUCCESS] (state, payload) {
		state.replaceAll(payload)
	},
	[GET_GOALS_FAILURE] (state) {},
	[ADD_GOAL] (state) {},
	[ADD_GOAL_SUCCESS] (state, payload) {
		state.addOne(payload)
	},
	[ADD_GOAL_FAILURE] (state) {},
	[EDIT_GOAL] (state) {},
	[EDIT_GOAL_SUCCESS] (state, payload) {
		state.updateOne(payload.id, payload)
	},
	[EDIT_GOAL_FAILURE] (state) {},
	[REMOVE_GOAL] (state) {},
	[REMOVE_GOAL_SUCCESS] (state, payload) {
		state.removeOne(payload.id)
	},
	[REMOVE_GOAL_FAILURE] (state) {},
	[REALIZE_GOAL] (state) {},
	[REALIZE_GOAL_SUCCESS] (state, payload) {
		state.updateOne(payload.id, { realized: true })
	},
	[REALIZE_GOAL_FAILURE] (state) {}
}
