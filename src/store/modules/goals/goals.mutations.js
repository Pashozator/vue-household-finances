import { ADD_GOAL, EDIT_GOAL, GET_GOALS, REALIZE_GOAL, REMOVE_GOAL } from './goals.mutation-types'
import { goalsAdapter } from './goals.adapter'
import Vue from 'vue'

export const goalsMutations = {
	[GET_GOALS] (state, payload) {
		Vue.set(state, 'entity', goalsAdapter.replaceAll(payload, state.entity))
	},
	[ADD_GOAL] (state, payload) {
		Vue.set(state, 'entity', goalsAdapter.addOne(payload, state.entity))
	},
	[EDIT_GOAL] (state, payload) {
		Vue.set(state, 'entity', goalsAdapter.updateOne({ id: payload.id, changes: payload }, state.entity))
	},
	[REMOVE_GOAL] (state, payload) {
		Vue.set(state, 'entity', goalsAdapter.removeOne(payload.id, state.entity))
	},
	[REALIZE_GOAL] (state, payload) {
		Vue.set(state, 'entity', goalsAdapter.updateOne({ id: payload.id, changes: { realized: true } }, state.entity))
	}
}
