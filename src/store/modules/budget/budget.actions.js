import {
	ADD_OPERATION,
	ADD_OPERATION_SUCCESS,
	EDIT_OPERATION,
	EDIT_OPERATION_SUCCESS,
	GET_BUDGET,
	GET_BUDGET_SUCCESS,
	REDUCE_DEBIT,
	REMOVE_OPERATION,
	REMOVE_OPERATION_SUCCESS
} from './budget.mutation-types'
import { budgetApi } from '../../../services/budget.api'
import { HIDE_LOADER, SHOW_LOADER } from '../loader/loader.mutations-types'
import { SHOW_ERROR } from '../error/error.mutations-types'

export const budgetActions = {
	async [GET_BUDGET] ({ dispatch }) {
		await dispatch(SHOW_LOADER)

		const response = await budgetApi.getBudget().catch(async () => {
			await dispatch(HIDE_LOADER)
			await dispatch(SHOW_ERROR)
		})

		await dispatch(HIDE_LOADER)

		if (response.error != null) {
			await dispatch(SHOW_ERROR)

			return
		}

		await dispatch(GET_BUDGET_SUCCESS, response.data)
	},
	[GET_BUDGET_SUCCESS] ({ commit }, payload) {
		commit(GET_BUDGET, payload)
	},
	async [ADD_OPERATION] ({ dispatch }, payload) {
		await dispatch(SHOW_LOADER)

		const response = await budgetApi.addOperation(payload).catch(async () => {
			await dispatch(HIDE_LOADER)
			await dispatch(SHOW_ERROR)
		})

		await dispatch(HIDE_LOADER)

		if (response.error != null) {
			await dispatch(SHOW_ERROR)

			return
		}

		await dispatch(ADD_OPERATION_SUCCESS, response.data)
	},
	[ADD_OPERATION_SUCCESS] ({ commit }, payload) {
		commit(ADD_OPERATION, payload)
	},
	async [EDIT_OPERATION] ({ dispatch }, payload) {
		await dispatch(SHOW_LOADER)

		const response = await budgetApi.editOperation(payload).catch(async () => {
			await dispatch(HIDE_LOADER)
			await dispatch(SHOW_ERROR)
		})

		await dispatch(HIDE_LOADER)

		if (response.error != null) {
			await dispatch(SHOW_ERROR)

			return
		}

		await dispatch(EDIT_OPERATION_SUCCESS, payload)
	},
	[EDIT_OPERATION_SUCCESS] ({ commit }, payload) {
		commit(EDIT_OPERATION, payload)
	},
	async [REMOVE_OPERATION] ({ dispatch }, payload) {
		await dispatch(SHOW_LOADER)

		const response = await budgetApi.removeOperation(payload).catch(async () => {
			await dispatch(HIDE_LOADER)
			await dispatch(SHOW_ERROR)
		})

		await dispatch(HIDE_LOADER)

		if (response.error != null) {
			await dispatch(SHOW_ERROR)

			return
		}

		await dispatch(REMOVE_OPERATION_SUCCESS, payload)
	},
	[REMOVE_OPERATION_SUCCESS] ({ commit }, payload) {
		commit(REMOVE_OPERATION, payload)
	},
	[REDUCE_DEBIT] ({ commit }, payload) {
		commit(REDUCE_DEBIT, payload)
	}
}
