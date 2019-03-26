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

export const budgetMutations = {
	[GET_BUDGET] (state) {
	},
	[GET_BUDGET_SUCCESS] (state, payload) {
		budgetAdapter.replaceAll(payload, state.operations)
	},
	[GET_BUDGET_FAILURE] (state) {
	},
	[ADD_OPERATION] (state, payload) {
	},
	[ADD_OPERATION_SUCCESS] (state, payload) {
		budgetAdapter.addOne(payload, state.operations)
		console.log(state)
	},
	[ADD_OPERATION_FAILURE] (state) {
	},
	[EDIT_OPERATION] (state, payload) {
	},
	[EDIT_OPERATION_SUCCESS] (state, payload) {
		budgetAdapter.updateOne({ id: payload.id, changes: payload }, state.operations)
	},
	[EDIT_OPERATION_FAILURE] (state) {
	},
	[REMOVE_OPERATION] (state, payload) {
	},
	[REMOVE_OPERATION_SUCCESS] (state, payload) {
		budgetAdapter.removeOne(payload.id, state.operations)
	},
	[REMOVE_OPERATION_FAILURE] (state) {
	},
	[REDUCE_DEBIT] (state) {
	}
}
