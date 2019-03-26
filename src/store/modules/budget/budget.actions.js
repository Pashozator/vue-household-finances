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

export const budgetActions = {
	[GET_BUDGET] ({ commit }) {
	},
	[GET_BUDGET_SUCCESS] ({ commit }, payload) {
	},
	[GET_BUDGET_FAILURE] ({ commit }) {
	},
	async [ADD_OPERATION] ({ dispatch, commit }, payload) {
		await dispatch(ADD_OPERATION_SUCCESS, payload)
	},
	[ADD_OPERATION_SUCCESS] ({ commit }, payload) {
		commit(ADD_OPERATION_SUCCESS, payload)
	},
	[ADD_OPERATION_FAILURE] ({ commit }) {
	},
	[EDIT_OPERATION] ({ commit }, payload) {
	},
	[EDIT_OPERATION_SUCCESS] ({ commit }, payload) {
	},
	[EDIT_OPERATION_FAILURE] ({ commit }) {
	},
	[REMOVE_OPERATION] ({ commit }, payload) {
	},
	[REMOVE_OPERATION_SUCCESS] ({ commit }, payload) {
	},
	[REMOVE_OPERATION_FAILURE] ({ commit }) {
	},
	[REDUCE_DEBIT] ({ commit }) {
	}
}
