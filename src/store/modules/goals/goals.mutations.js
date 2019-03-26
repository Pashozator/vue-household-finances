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
import { goalsAdapter } from './goals.adapter'

export const goalsMutations = {
	[GET_GOALS] (state) {},
	[GET_GOALS_SUCCESS] (state, payload) {
		goalsAdapter.replaceAll(payload, state)
	},
	[GET_GOALS_FAILURE] (state) {},
	[ADD_GOAL] (state) {},
	[ADD_GOAL_SUCCESS] (state, payload) {
		goalsAdapter.addOne(payload, state)
	},
	[ADD_GOAL_FAILURE] (state) {},
	[EDIT_GOAL] (state) {},
	[EDIT_GOAL_SUCCESS] (state, payload) {
		goalsAdapter.updateOne({ id: payload.id, changes: payload }, state)
	},
	[EDIT_GOAL_FAILURE] (state) {},
	[REMOVE_GOAL] (state) {},
	[REMOVE_GOAL_SUCCESS] (state, payload) {
		goalsAdapter.removeOne(payload.id, state)
	},
	[REMOVE_GOAL_FAILURE] (state) {},
	[REALIZE_GOAL] (state) {},
	[REALIZE_GOAL_SUCCESS] (state, payload) {
		goalsAdapter.updateOne({ id: payload.id, changes: { realized: true } }, state)
	},
	[REALIZE_GOAL_FAILURE] (state) {}
}
