import {
	ADD_OPERATION,
	ADD_OPERATION_FAILURE,
	ADD_OPERATION_SUCCESS,
	EDIT_OPERATION,
	EDIT_OPERATION_FAILURE,
	EDIT_OPERATION_SUCCESS,
	GET_BUDGET,
	GET_BUDGET_FAILURE,
	GET_BUDGET_SUCCESS,
	REDUCE_DEBIT,
	REMOVE_OPERATION,
	REMOVE_OPERATION_FAILURE,
	REMOVE_OPERATION_SUCCESS
} from './budget.mutation-types'
import { budgetAdapter } from './budget.adapter'
import Vue from 'vue'

export const budgetMutations = {
	[GET_BUDGET] (state) {
	},
	[GET_BUDGET_SUCCESS] (state, payload) {
		Vue.set(state, 'operations', budgetAdapter.replaceAll(payload, state.operations))
	},
	[GET_BUDGET_FAILURE] (state) {
	},
	[ADD_OPERATION] (state, payload) {
	},
	[ADD_OPERATION_SUCCESS] (state, payload) {
		state.debit += payload.value
		Vue.set(state, 'operations', budgetAdapter.addOne(payload, state.operations))
	},
	[ADD_OPERATION_FAILURE] (state) {
	},
	[EDIT_OPERATION] (state, payload) {
	},
	[EDIT_OPERATION_SUCCESS] (state, payload) {
		Vue.set(state, 'operations', budgetAdapter.updateOne({ id: payload.id, changes: payload }, state.operations))
	},
	[EDIT_OPERATION_FAILURE] (state) {
	},
	[REMOVE_OPERATION] (state, payload) {
	},
	[REMOVE_OPERATION_SUCCESS] (state, payload) {
		state.debit -= payload.value
		Vue.set(state, 'operations', budgetAdapter.removeOne(payload.id, state.operations))
	},
	[REMOVE_OPERATION_FAILURE] (state) {
	},
	[REDUCE_DEBIT] (state, payload) {
		state.debit -= payload
	}
}
