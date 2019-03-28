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
import { budgetApi } from '../../../services/budget.api'

export const budgetActions = {
	async [GET_BUDGET] ({ dispatch }) {
		const response = await budgetApi.getBudget()

		if (response.error != null) {
			await dispatch(GET_BUDGET_FAILURE)

			return
		}

		await dispatch(GET_BUDGET_SUCCESS, response.data)
	},
	[GET_BUDGET_SUCCESS] ({ commit }, payload) {
		commit(GET_BUDGET_SUCCESS, payload)
	},
	[GET_BUDGET_FAILURE] ({ commit }) {
	},
	async [ADD_OPERATION] ({ dispatch }, payload) {
		const response = await budgetApi.addOperation(payload)

		if (response.error != null) {
			await dispatch(ADD_OPERATION_FAILURE)

			return
		}

		await dispatch(ADD_OPERATION_SUCCESS, response.data)
	},
	[ADD_OPERATION_SUCCESS] ({ commit }, payload) {
		commit(ADD_OPERATION_SUCCESS, payload)
	},
	[ADD_OPERATION_FAILURE] ({ commit }) {
	},
	async [EDIT_OPERATION] ({ dispatch }, payload) {
		const response = await budgetApi.editOperation(payload)

		if (response.error != null) {
			await dispatch(EDIT_OPERATION_FAILURE)

			return
		}

		await dispatch(EDIT_OPERATION_SUCCESS, payload)
	},
	[EDIT_OPERATION_SUCCESS] ({ commit }, payload) {
		commit(EDIT_OPERATION_SUCCESS, payload)
	},
	[EDIT_OPERATION_FAILURE] ({ commit }) {
	},
	async [REMOVE_OPERATION] ({ dispatch }, payload) {
		const response = await budgetApi.removeOperation(payload)

		if (response.error != null) {
			await dispatch(REMOVE_OPERATION_FAILURE)

			return
		}

		await dispatch(REMOVE_OPERATION_SUCCESS, payload)
	},
	[REMOVE_OPERATION_SUCCESS] ({ commit }, payload) {
		commit(REMOVE_OPERATION_SUCCESS, payload)
	},
	[REMOVE_OPERATION_FAILURE] ({ commit }) {
	},
	[REDUCE_DEBIT] ({ commit }, payload) {
		commit(REDUCE_DEBIT, payload)
	}
}
