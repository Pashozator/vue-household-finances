import { budgetAdapter } from './budget.adapter'

export const getDebit = state => state.budget.debit
export const getOperations = state => budgetAdapter.getAll(state.budget.operations)
