import axios from 'axios'

class ApiService {
	constructor () {
		this.base = '/api/budget'
	}

	getBudget () {
		return axios.get(`${this.base}`).then(response => response.data)
	}

	addOperation (operation) {
		return axios.post(`${this.base}/operations`, operation).then(response => response.data)
	}
}

export const api = new ApiService()
