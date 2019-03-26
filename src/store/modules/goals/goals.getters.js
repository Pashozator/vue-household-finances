import { goalsAdapter } from './goals.adapter'

export const getGoals = state => goalsAdapter.getAll(state.goals)
