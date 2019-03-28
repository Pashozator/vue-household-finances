import {
	ADD_GOAL,
	ADD_GOAL_SUCCESS,
	EDIT_GOAL,
	EDIT_GOAL_SUCCESS,
	GET_GOALS,
	GET_GOALS_SUCCESS,
	REALIZE_GOAL,
	REALIZE_GOAL_SUCCESS,
	REMOVE_GOAL,
	REMOVE_GOAL_SUCCESS
} from './goals.mutation-types'
import { REDUCE_DEBIT } from '../budget/budget.mutation-types'
import { goalsApi } from '../../../services/goals.api'
import { HIDE_LOADER, SHOW_LOADER } from '../loader/loader.mutations-types'
import { SHOW_ERROR } from '../error/error.mutations-types'

export const goalsActions = {
	async [GET_GOALS] ({ dispatch }) {
		await dispatch(SHOW_LOADER)

		const response = await goalsApi.getGoals().catch(async () => {
			await dispatch(HIDE_LOADER)
			await dispatch(SHOW_ERROR)
		})

		await dispatch(HIDE_LOADER)

		if (response.error != null) {
			await dispatch(SHOW_ERROR)

			return
		}

		await dispatch(GET_GOALS_SUCCESS, response.data)
	},
	[GET_GOALS_SUCCESS] ({ commit }, payload) {
		commit(GET_GOALS, payload)
	},
	async [ADD_GOAL] ({ dispatch }, payload) {
		await dispatch(SHOW_LOADER)

		const response = await goalsApi.addGoal(payload).catch(async () => {
			await dispatch(HIDE_LOADER)
			await dispatch(SHOW_ERROR)
		})

		await dispatch(HIDE_LOADER)

		if (response.error != null) {
			await dispatch(SHOW_ERROR)

			return
		}

		await dispatch(ADD_GOAL_SUCCESS, response.data)
	},
	[ADD_GOAL_SUCCESS] ({ commit }, payload) {
		commit(ADD_GOAL, payload)
	},
	async [EDIT_GOAL] ({ dispatch }, payload) {
		await dispatch(SHOW_LOADER)

		const response = await goalsApi.editGoal(payload).catch(async () => {
			await dispatch(HIDE_LOADER)
			await dispatch(SHOW_ERROR)
		})

		await dispatch(HIDE_LOADER)

		if (response.error != null) {
			await dispatch(SHOW_ERROR)

			return
		}

		await dispatch(EDIT_GOAL_SUCCESS, payload)
	},
	[EDIT_GOAL_SUCCESS] ({ commit }, payload) {
		commit(EDIT_GOAL, payload)
	},
	async [REMOVE_GOAL] ({ dispatch }, payload) {
		await dispatch(SHOW_LOADER)

		const response = await goalsApi.removeGoal(payload).catch(async () => {
			await dispatch(HIDE_LOADER)
			await dispatch(SHOW_ERROR)
		})

		await dispatch(HIDE_LOADER)

		if (response.error != null) {
			await dispatch(SHOW_ERROR)

			return
		}

		await dispatch(REMOVE_GOAL_SUCCESS, payload)
	},
	[REMOVE_GOAL_SUCCESS] ({ commit }, payload) {
		commit(REMOVE_GOAL, payload)
	},
	async [REALIZE_GOAL] ({ dispatch }, payload) {
		await dispatch(SHOW_LOADER)

		const response = await goalsApi.realizeGoal(payload).catch(async () => {
			await dispatch(HIDE_LOADER)
			await dispatch(SHOW_ERROR)
		})

		await dispatch(HIDE_LOADER)

		if (response.error != null) {
			await dispatch(SHOW_ERROR)

			return
		}

		await dispatch(REALIZE_GOAL_SUCCESS, payload)
		await dispatch(REDUCE_DEBIT, payload.value)
	},
	[REALIZE_GOAL_SUCCESS] ({ commit }, payload) {
		commit(REALIZE_GOAL, payload)
	}
}
