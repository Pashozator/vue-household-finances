import axios from 'axios'

class GoalsApi {
	constructor () {
		this.base = '/api/goals'
	}

	getGoals () {
		return axios.get(`${this.base}`).then(response => response.data)
	}

	addGoal (goal) {
		return axios.post(`${this.base}`, goal).then(response => response.data)
	}

	editGoal (goal) {
		return axios.put(`${this.base}/${goal.id}`, goal).then(response => response.data)
	}

	removeGoal (goal) {
		return axios.delete(`${this.base}/${goal.id}`).then(response => response.data)
	}

	realizeGoal (goal) {
		return axios.patch(`${this.base}/${goal.id}`).then(response => response.data)
	}
}

export const goalsApi = new GoalsApi()
