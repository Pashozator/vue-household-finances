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
import { REDUCE_DEBIT } from '../budget/budget.mutation-types'
import { goalsApi } from '../../../services/goals.api'

export const goalsActions = {
	async [GET_GOALS] ({ dispatch }, payload) {
		const response = await goalsApi.getGoals()

		if (response.error != null) {
			await dispatch(GET_GOALS_FAILURE)

			return
		}

		await dispatch(GET_GOALS_SUCCESS, response.data)
	},
	[GET_GOALS_SUCCESS] ({ commit }, payload) {
		commit(GET_GOALS_SUCCESS, payload)
	},
	[GET_GOALS_FAILURE] ({ commit }) {
	},
	async [ADD_GOAL] ({ dispatch }, payload) {
		const response = await goalsApi.addGoal(payload)

		if (response.error != null) {
			await dispatch(ADD_GOAL_FAILURE)

			return
		}

		await dispatch(ADD_GOAL_SUCCESS, response.data)
	},
	[ADD_GOAL_SUCCESS] ({ commit }, payload) {
		commit(ADD_GOAL_SUCCESS, payload)
	},
	[ADD_GOAL_FAILURE] ({ commit }) {
	},
	async [EDIT_GOAL] ({ dispatch }, payload) {
		const response = await goalsApi.editGoal(payload)

		if (response.error != null) {
			await dispatch(EDIT_GOAL_FAILURE)

			return
		}

		await dispatch(EDIT_GOAL_SUCCESS, payload)
	},
	[EDIT_GOAL_SUCCESS] ({ commit }, payload) {
		commit(EDIT_GOAL_SUCCESS, payload)
	},
	[EDIT_GOAL_FAILURE] ({ commit }) {
	},
	async [REMOVE_GOAL] ({ dispatch }, payload) {
		const response = await goalsApi.removeGoal(payload)

		if (response.error != null) {
			await dispatch(REMOVE_GOAL_FAILURE)

			return
		}

		await dispatch(REMOVE_GOAL_SUCCESS, payload)
	},
	[REMOVE_GOAL_SUCCESS] ({ commit }, payload) {
		commit(REMOVE_GOAL_SUCCESS, payload)
	},
	[REMOVE_GOAL_FAILURE] ({ commit }) {
	},
	async [REALIZE_GOAL] ({ dispatch }, payload) {
		const response = await goalsApi.realizeGoal(payload)

		if (response.error != null) {
			await dispatch(REALIZE_GOAL_FAILURE)

			return
		}

		await dispatch(REALIZE_GOAL_SUCCESS, payload)
		await dispatch(REDUCE_DEBIT, payload.value)
	},
	[REALIZE_GOAL_SUCCESS] ({ commit }, payload) {
		commit(REALIZE_GOAL_SUCCESS, payload)
	},
	[REALIZE_GOAL_FAILURE] ({ commit }) {
	}
}
