import axios from 'axios'

class BudgetApi {
	constructor () {
		this.base = '/api/budget'
	}

	getBudget () {
		return axios.get(`${this.base}`).then(response => response.data)
	}

	addOperation (operation) {
		return axios.post(`${this.base}/operations`, operation).then(response => response.data)
	}

	editOperation (operation) {
		return axios.put(`${this.base}/operations/${operation.id}`, operation).then(response => response.data)
	}

	removeOperation (operation) {
		return axios.delete(`${this.base}/operations/${operation.id}`).then(response => response.data)
	}
}

export const budgetApi = new BudgetApi()
