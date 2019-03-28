import { ADD_OPERATION, EDIT_OPERATION, GET_BUDGET, REDUCE_DEBIT, REMOVE_OPERATION } from './budget.mutation-types'
import { budgetAdapter } from './budget.adapter'
import Vue from 'vue'

export const budgetMutations = {
	[GET_BUDGET] (state, payload) {
		state.debit = payload.debit
		Vue.set(state, 'operations', budgetAdapter.replaceAll(payload.operations, state.operations))
	},
	[ADD_OPERATION] (state, payload) {
		state.debit += payload.value
		Vue.set(state, 'operations', budgetAdapter.addOne(payload, state.operations))
	},
	[EDIT_OPERATION] (state, payload) {
		state.debit = state.debit - payload.oldValue + payload.value
		Vue.set(state, 'operations', budgetAdapter.updateOne({ id: payload.id, changes: payload }, state.operations))
	},
	[REMOVE_OPERATION] (state, payload) {
		state.debit -= payload.value
		Vue.set(state, 'operations', budgetAdapter.removeOne(payload.id, state.operations))
	},
	[REDUCE_DEBIT] (state, payload) {
		state.debit -= payload
	}
}
